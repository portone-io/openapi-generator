import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, ParseFloatPipe, Query, Req } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Cookies, Headers } from '../decorators';
import { DefaultApi } from '../api';
import { &#39;A&#39; | &#39;B&#39; | &#39;C&#39;,  } from '../models';

@Controller()
export class DefaultApiController {
  constructor(private readonly defaultApi: DefaultApi) {}

  @Get('/test/parameters/:path_default/:path_nullable')
  findPetsByStatus(@Param('path_default', new DefaultValuePipe(undefined)) pathDefault: string, @Param('path_nullable', new DefaultValuePipe(undefined)) pathNullable: string, @Query('query_default', new DefaultValuePipe('available')) queryDefault: string | undefined, @Query('query_default_enum', new DefaultValuePipe('B')) queryDefaultEnum: 'A' | 'B' | 'C' | undefined, @Query('query_default_int', new DefaultValuePipe(3), new ParseIntPipe({optional: true})) queryDefaultInt: number | undefined, @Headers('header_default', new DefaultValuePipe('available')) headerDefault: string | undefined, @Headers('header_default_enum', new DefaultValuePipe('B')) headerDefaultEnum: 'A' | 'B' | 'C' | undefined, @Headers('header_default_int', new DefaultValuePipe(3), new ParseIntPipe({optional: true})) headerDefaultInt: number | undefined, @Cookies('cookie_default', new DefaultValuePipe('available')) cookieDefault: string | undefined, @Cookies('cookie_default_enum', new DefaultValuePipe('B')) cookieDefaultEnum: 'A' | 'B' | 'C' | undefined, @Cookies('cookie_default_int', new DefaultValuePipe(3), new ParseIntPipe({optional: true})) cookieDefaultInt: number | undefined, @Query('query_nullable', new DefaultValuePipe(undefined)) queryNullable: string | null | undefined, @Headers('header_nullable', new DefaultValuePipe(undefined)) headerNullable: string | null | undefined, @Cookies('cookie_nullable', new DefaultValuePipe(undefined)) cookieNullable: string | null | undefined, @Query('$query-$dollar-sign', new DefaultValuePipe(undefined)) $query$dollarSign: string | undefined, @Req() request: Request): void | Promise<void> | Observable<void> {
    return this.defaultApi.findPetsByStatus({ pathDefault, pathNullable, queryDefault, queryDefaultEnum, queryDefaultInt, headerDefault, headerDefaultEnum, headerDefaultInt, cookieDefault, cookieDefaultEnum, cookieDefaultInt, queryNullable, headerNullable, cookieNullable, $query$dollarSign, }, request);
  }

} 