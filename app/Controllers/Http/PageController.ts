import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class PageController {
  public home({ view }): HealthCheckContract {
    return view.render('welcome')
  }
}
