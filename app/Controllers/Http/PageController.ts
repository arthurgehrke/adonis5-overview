import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { HealthCheckContract } from '@ioc:Adonis/Core/HealthCheck';

export default class PageController {
  public home({ view }): HealthCheckContract {
    return view.render('welcome')
  }
}
