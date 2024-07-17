import { HttpContext } from '@adonisjs/core/http'
import IHelloWorld from '#interfaces/i_hello_world'

export default class HelloController {
  /**
   * @index
   * @tag HelloWorld
   * @summary Greets user and returns current date
   * @responseBody 200 - <IHelloWorld>
   */
  async index({ response }: HttpContext) {
    const date = new Date()
    const greet: IHelloWorld = {
      hello: 'world',
      date,
    }
    response.send(greet)
  }
}
