import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { book } from 'src/schemas/book.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BooksService {

  constructor(@InjectModel(book.name) private bookmodel: Model<book>) {}

  create(createBookDto: CreateBookDto) {
    const newBook = new this.bookmodel(createBookDto);
    return newBook.save();
  }

  findAll() {
    return this.bookmodel.find().exec();
  }

  findOne(id: string) {
    return this.bookmodel.findById(id).exec();
  }

  update(id: string, updateBookDto: UpdateBookDto) {
    return this.bookmodel
    .findByIdAndUpdate(id, updateBookDto, {
      new: true, // retourne l'utilisateur mis à jour
      runValidators: true, // applique les validateurs du schema
    })
    .exec();
  }

  remove(id: string) {
    return this.bookmodel.findByIdAndDelete(id).exec();
  }
}
