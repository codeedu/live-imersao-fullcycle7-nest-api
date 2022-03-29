import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order)
    private orderModel: typeof Order,
  ) {}

  create(createOrderDto: CreateOrderDto) {
    return this.orderModel.create({
      amount: createOrderDto.amount,
    }); //lançar SequelizeSQLError
  }

  findAll() {
    return this.orderModel.findAll();
  }

  findOne(id: string) {
    return this.orderModel.findByPk(id, { rejectOnEmpty: true });
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    const order = await this.orderModel.findByPk(id, { rejectOnEmpty: true });
    order.update({ amount: updateOrderDto.amount });
    return order;
  }

  async remove(id: string) {
    const order = await this.orderModel.findByPk(id, { rejectOnEmpty: true });
    order.destroy();
  }
}