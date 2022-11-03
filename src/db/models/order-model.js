import { model } from 'mongoose';
import { OrderSchema } from '../schemas/order-schema';

const Order = model('orders', OrderSchema);

export class OrderModel {
  async create(productInfo, userInfo) {
    console.log(userInfo);
    const { address, phoneNumber, userId, fullName, totalAmount } = userInfo;
    return await Order.create({
      userId: userId,
      address: address,
      phoneNumber: phoneNumber,
      name: fullName,
      products: productInfo,
      totalAmount: totalAmount,
    });
    // 배열을 삽입할 땐 push 오퍼레이터를 사용하는 것이 아닌지?
  }
  async updateShippingStatus(orderId, status) {
    const currStatus = await this.getStatus(orderId);

    if (currStatus === 'canceled') {
      throw new Error(`배송 상태가 ${currStatus.shipping} 입니다.`);
    }
    if (currStatus === 'shipped' && status === 'canceled') {
      throw new Error('취소 불가 : 이미 배송이 시작되었습니다.');
    }
    // 특정 필드를 수정할 땐 set이라던데?
    return await Order.findOneAndUpdate({ _id: orderId }, { shipping: status });
  }

  async getStatus(orderId) {
    const status = await Order.findOne({ _id: orderId });
    return status.shipping;
  }

  async getOrderUser(orderId) {
    const user = await Order.findOne({ _id: orderId }).populate('userId');
    return user.userId;
  }

  async updateOrder(orderId, newInfo) {
    const result = await Order.findOneAndUpdate({ _id: orderId }, newInfo);
  }
}

const orderModel = new OrderModel();

export { orderModel };