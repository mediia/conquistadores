angular.module('shekinah.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    .state('shekinah', {
    abstract: true,
    templateUrl: 'templates/menu.html'
  })

  .state('shekinah.novedades', {
    url: '/novedades',
    views: {
      'menuContent': {
        templateUrl: 'templates/novedades.html',
        controller: 'NovedadesCtrl'
      }
    }
  })

  .state('shekinah.ficha', {
    url: '/ficha',
    views: {
      'menuContent': {
        templateUrl: 'templates/ficha.html',
        controller: 'FichaCtrl'
      }
    }
  })

  .state('shekinah.carpetas', {
    url: '/carpetas',
    views: {
      'menuContent': {
        templateUrl: 'templates/carpetas.html',
        controller: 'CarpetasCtrl'
      }
    }
  })

  .state('shekinah.carpetas.carpeta', {
    url: '/{carpetaId}',
    templateUrl: 'templates/carpeta.html',
    controller: 'CarpetaCtrl'
  })

  .state('shekinah.carpetas.carpeta.requisito', {
    url: '/{requisito}',
    templateUrl: 'templates/requisito.html',
    controller: 'RequisitoCtrl'
  })

  .state('shekinah.materiales', {
    url: '/materiales',
    views: {
      'menuContent': {
        templateUrl: 'templates/materiales.html',
        controller: 'MaterialesCtrl'
      }
    }
  })

  .state('shekinah.libros', {
    url: '/materiales/libros',
    views: {
      'menuContent': {
        templateUrl: 'templates/libros.html',
        controller: 'LibrosCtrl'
      }
    }
  })

  .state('shekinah.especialidades', {
    url: '/materiales/especialidades',
    views: {
      'menuContent': {
        templateUrl: 'templates/especialidades.html',
        controller: 'EspecialidadesCtrl'
      }
    }
  })

  .state('shekinah.direccion', {
    url: '/direccion',
    views: {
      'menuContent': {
        templateUrl: 'templates/direccion.html',
        controller: 'DireccionCtrl'
      }
    }
  })

  .state('shekinah.secretaria', {
    url: '/secretaria',
    views: {
      'menuContent': {
        templateUrl: 'templates/secretaria.html',
        controller: 'SecretariaCtrl'
      }
    }
  })

  .state('shekinah.instruccion', {
    url: '/instruccion',
    views: {
      'menuContent': {
        templateUrl: 'templates/instruccion.html',
        controller: 'InstruccionCtrl'
      }
    }
  })

  .state('shekinah.consejeria', {
    url: '/consejeria',
    views: {
      'menuContent': {
        templateUrl: 'templates/consejeria.html',
        controller: 'ConsejeriaCtrl'
      }
    }
  })



  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/novedades');

});
