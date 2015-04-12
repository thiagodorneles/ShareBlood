'use strict';

angular
    .module('shareBlood')
    .controller('detailController', ['API', '$routeParams', function(API, $routeParams){

        var detail = this;

        detail.get = function(id) {

            API.get('donation_histories/')
                .success(function(data) {
                  debugger;
                  detail.donation = data.donation_histories[0];
                });

            // var donation = {
            //     needed:  10,
            //     donated: 0,
            //     favored:  "João da Silva",
            //     start_date: "2015-04-11",
            //     end_date: "2015-04-16",
            //     description: "Precisamos de ajuda para o João, que vai passar por uma sirugia nesse dia  12, a santa casa pede sangue O+.",
            //     favored_bood_types: [
            //         "O+"
            //     ],
            //     blood_bank : {
            //         profile: {
            //             name: "Santa Casa de Misericórdia de Porto Alegre",
            //             image : "https://web.whatsapp.com/pp?t=l&u=555185231446%40c.us&i=1428505622",
            //             about: "Sou um doador de Sangue voluntário.",
            //             site : "https://www.santacasa.org.br/pt"
            //         },
            //         address : {
            //           zipcode:"90010080",
            //           street: " Rua Professor Annes Dias",
            //           number: "295",
            //           neighborhood:"Centro Histórico",
            //           city:"Porto Alegre",
            //           state:"RS",
            //           country:"Brasil",
            //           coordenate: {
            //               latitude: 42.1083080,
            //               longitude: -87.7417070
            //            }
            //         }
            //      },
            //     owner : {
            //         profile: {
            //             blood_type : "O+",
            //             name: "Theo Renck",
            //             gender: "M",
            //             image : "https://web.whatsapp.com/pp?t=l&u=555185231446%40c.us&i=1428505622",
            //             about: "Sou um doador de Sangue voluntário."
            //         }
            //      },
            //      donators: [
            //         {
            //             name: 'Thiago Dorneles',
            //             date: '01/01/2000'
            //         },
            //         {
            //             name: 'Thiago Dorneles',
            //             date: '01/01/2000'
            //         },
            //         {
            //             name: 'Thiago Dorneles',
            //             date: '01/01/2000'
            //         },
            //         {
            //             name: 'Thiago Dorneles',
            //             date: '01/01/2000'
            //         }
            //      ]
            // };

            // detail.donation = donation;

        };

        detail.get($routeParams.id);

}]);