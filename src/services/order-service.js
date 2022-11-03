import { orderModel, userModel } from '../db';

class OrderService {
  constructor(orderModel) {
    this.orderModel = orderModel;
  }

  async order(productInfo, userInfo) {
    return await this.orderModel.create(productInfo, userInfo);
  }

  async updateOrder(userId, orderId, newInfo) {
    const userCheck = await this.checkUser(userId, orderId);
    if (!userCheck) {
      throw new Error('주문자만 주문을 수정할 수 있습니다.');
    }
    return await this.orderModel.updateOrder(orderId, newInfo);
  }

  async checkUser(userId, orderId) {
    const user = await userModel.findById(userId);
    const orderUser = await this.orderModel.getOrderUser(orderId);
    return user.id === orderUser.id;
  }
}

const orderService = new OrderService(orderModel);

export { orderService };