import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }

  @Get('importmaps')
  async importmap(@Request() req) {
    return JSON.parse(
      '{\n' +
        '      "imports": {\n' +
        '        "single-spa": "https://cdn.jsdelivr.net/npm/single-spa@5.9.0/lib/system/single-spa.min.js",\n' +
        '        "react": "https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.production.min.js",\n' +
        '        "react-dom": "https://cdn.jsdelivr.net/npm/react-dom@17.0.2/umd/react-dom.production.min.js",\n' +
        '        "@joaoc/root-config": "//localhost:9000/joaoc-root-config.js",\n' +
        '        "@joaoc/mf-header": "//localhost:8080/joaoc-mf-header.js",\n' + //serviceName.namespace.clusterName
        '        "@joaoc/mf-footer": "//localhost:8081/joaoc-mf-footer.js",\n' +
        '        "@joaoc/mf-home": "//localhost:8082/joaoc-mf-home.js",\n' +
        '        "@joaoc/mf-continents": "//localhost:4200/main.js",\n' +
        '        "@joaoc/mf-europe": "//localhost:8083/js/app.js",\n' +
        '        "@joaoc/mf-africa": "//localhost:4201/main.js",\n' +
        '        "@joaoc/mf-america": "//localhost:8084/joaoc-mf-america.js",\n' +
        '        "@joaoc/mf-shared": "//localhost:8085/joaoc-mf-shared.js"\n' +
        '      }\n' +
        '    }',
    );
  }

  @Get('template')
  async template(@Request() req) {
    return JSON.parse(
      '{\n' +
        '   "containerEl":"body",\n' +
        '   "routes":[\n' +
        '      {\n' +
        '         "type":"nav",\n' +
        '         "routes":[\n' +
        '            {\n' +
        '               "type":"application",\n' +
        '               "name":"@joaoc/mf-header"\n' +
        '            }\n' +
        '         ]\n' +
        '      },\n' +
        '      {\n' +
        '         "type":"div",\n' +
        '         "attrs":[\n' +
        '            {\n' +
        '               "name":"class",\n' +
        '               "value":"mf-content"\n' +
        '            }\n' +
        '         ],\n' +
        '         "routes":[\n' +
        '            {\n' +
        '               "type":"route",\n' +
        '               "path":"/",\n' +
        '               "exact":true,\n' +
        '               "routes":[\n' +
        '                  {\n' +
        '                     "type":"application",\n' +
        '                     "name":"@joaoc/mf-home"\n' +
        '                  }\n' +
        '               ]\n' +
        '            },\n' +
        '            {\n' +
        '               "type":"route",\n' +
        '               "path":"/continents",\n' +
        '               "routes":[\n' +
        '                  {\n' +
        '                     "type":"application",\n' +
        '                     "name":"@joaoc/mf-continents"\n' +
        '                  }\n' +
        '               ]\n' +
        '            },\n' +
        '            {\n' +
        '               "type":"route",\n' +
        '               "path":"/europe",\n' +
        '               "routes":[\n' +
        '                  {\n' +
        '                     "type":"application",\n' +
        '                     "name":"@joaoc/mf-europe"\n' +
        '                  }\n' +
        '               ]\n' +
        '            },\n' +
        '            {\n' +
        '               "type":"route",\n' +
        '               "path":"/africa",\n' +
        '               "routes":[\n' +
        '                  {\n' +
        '                     "type":"application",\n' +
        '                     "name":"@joaoc/mf-africa"\n' +
        '                  }\n' +
        '               ]\n' +
        '            },\n' +
        '            {\n' +
        '               "type":"route",\n' +
        '               "path":"/america",\n' +
        '               "routes":[\n' +
        '                  {\n' +
        '                     "type":"application",\n' +
        '                     "name":"@joaoc/mf-america"\n' +
        '                  }\n' +
        '               ]\n' +
        '            }\n' +
        '         ]\n' +
        '      },\n' +
        '      {\n' +
        '         "type":"footer",\n' +
        '         "routes":[\n' +
        '            {\n' +
        '               "type":"application",\n' +
        '               "name":"@joaoc/mf-footer"\n' +
        '            }\n' +
        '         ]\n' +
        '      }\n' +
        '   ]\n' +
        '}',
    );
  }
}