import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Page from '../../Models/Page'

export default class PageController {
  public async store({ request, response }:HttpContextContract): Promise<Page> {
    const { name } = request.body

    const page = await Page.create(name)

    return response.json(page)
  }
}
