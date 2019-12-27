import React, {useState, useEffect} from "react";
import './Planet.css';
import {Link} from "react-router-dom";

/**
 * Planets
 * Clase que nos va a a posibilitar hacer FETCH
 * @see
 */
const Planets = () => {

    // TODO: Change by API_React
    const [hasError, setErrors] = useState(false);
    const [planets, setPlanets] = useState({});

    // VAR :
    //   URL de API
    const url_api = "http://localhost:5000/api/author/getdd"  // Url de la API

    /**
     * Función que nos verifica el estado de la API.
     * @param {string} $url_api URL a verficar su estado
     */
    async function checkStatusAPI_Call($url_api) {
        // const api_call = await fetch($url_api , {
        //   // crossDomain:true,
        //   // method: 'GET',
        //   // headers: {'Content-Type':'application/json'},
        //   mode: "no-cors"
        // });
        const api_call = await fetch($url_api);

        var status_api_call = api_call.status;

        console.groupCollapsed("➖ Status => " + $url_api + ' : ' + api_call.statusText);
        console.log(status_api_call);
        if (status_api_call === 200) {
            console.log("✅ Estado correcto");
            fetchData($url_api, api_call);
            console.groupEnd();
        } else {
            console.log("❌ Estado incorrecto")
            console.groupEnd();
        }
    }

    //#region [TEST] TEST-get_method()

    // test_get_method();

    /**
     * TEST => get_method()
     */
    function test_get_method() {
    
        console.group("> test_get_method()");

        // GET
        return_results(1);
        // POST
        return_results(2);
        // DEL
        return_results(3);

        /**
         * Funcion que devuelve el metodo intoducido
         * @param {number} $num_method Numero del metodo a devolver-
         */
        function return_results($num_method) {
            var test_get = get_method($num_method);
            console.log(test_get)
            console.assert(test_get.value == $num_method, "❌No es el método esperado del tipo " + $num_method)
        }

        console.groupEnd();
    }

    //#endregion

    /**
     * Función que nos va a devolver el metodo del fetch
     * @param {number} $num_method Numero del método
     */
    function get_method($num_method) {

        // ENUM del tipo de metodo recibido
        var METHOD = {
            GET: {value: 1, name: "GET"},
            POST: {value: 2, name: "POST"},
            DEL: {value: 3, name: "DEL"}
        };

        // SWITCH según el tipo de metodo
        switch ($num_method) {
            case 1:
                console.log('GET')
                return METHOD.GET;
                break;
            case 2:
                console.log('POST')
                return METHOD.POST;
                break;
            case 3:
                console.log('DEL')
                return METHOD.DEL;
                break;
            default:
                console.log('Metodo no admitido')
                break;
        }

        return METHOD.name;
    }

    //#region [TEST] Funcion provisional a la principal
    /**
     * @test
     * Funcion de prueba para los metodos de la API
     */
    async function checkStatusAPI_Call_Method_GET($url_api,$num_method) {

        // Variable que nos recoge el nombre del metodo a insertar
        var method_ = get_method($num_method).name;
        // const api_call = await
        //     fetch($url_api, {
        //         method: method_,
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json',
        //         }               
        //         // ,
        //         // body: JSON.stringify({
        //         //     firstParam: 'yourValue',
        //         //     secondParam: 'yourOtherValue',
        //         // })
        //     }).catch(err => setErrors(err))

        
        var api_call ;

            // Si es GET 
        if ($num_method == 1 | $num_method == 3) {
            console.log("Esto es GET|DEL");
            api_call = await
            fetch($url_api, {
                method: method_,
                // headers: {
                //     // 'Accept': 'application/json',
                //     'Content-Type': 'application/json',
                // }, redirect: "follow"

            }).catch(err => setErrors(err))
        //    console.info("* TEST POST :\n" + await api_call.json())

        }else{
            console.log("Esto no es GET")
            api_call = await
            fetch($url_api, {
                method: method_,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "idAuthor": 89,
                    "nameAuthor": "User_89",
                    "firstName": "_AAAAAAAAAAAAA",
                    "lastName": "_SSSSSSSSSSSSS",
                    "prefix": "_D",
                    "dateofBirth": "2009-12-12T10:00:00",
                    "dateofDeath": "2018-12-12T20:00:00",
                    "placeofBirth": "_Munich-Alemania",
                    "placeofDeath": "_America-New York",
                    "urlWIki": "https://es.google_",
                    "urlOfficialPage": "http://www.wwwww.com/_",
                    "pseudonyms": "_Pseudi",
                    "imgScale1616": "_FFFFFFFFF",
                    "imgScaleBig": "_FFFFFFFFFFFFF.jpg",
                    "imgUrl": "_FFFFFFFFFFFFFFFFFF"
                })
            }).catch(err => setErrors(err))
            // console.info("* TEST POST :\n" + await api_call.json())
        }
        // Si es POST/DEL
            try{
                var status_api_call = api_call.status;
                console.groupCollapsed("➖ StatusII => " + $url_api + ' : ' + api_call.statusText);
                console.log(status_api_call);
            }catch(error){
                console.log("❌Error al proporcionar un estado \n\t" + error)
            }
        
        if (status_api_call === 200) {
            console.log("✅ Estado correcto");
            fetchData($url_api, api_call);
            console.groupEnd();
        } else {
            console.log("❌ Estado incorrecto")
            console.groupEnd();
        }
    }

    //#endregion
    //----------- RUN APP -------------
    useEffect(() => {
        // checkStatusAPI_Call(url_api);
        // checkStatusAPI_Call_Method_GET(url_api,1);
    }, []);

    /**
     * Función que nos hace un 'FETCH' de la api que queremos
     */
    async function fetchData($url_api, $res) {

        // Conversión en JSON
        $res
            .json()
            .then($res => setPlanets($res))
            .catch(err => setErrors(err));

        // console.log("Salida del FETCH de la API :")
        // // console.log(JSON.stringify($res, null,'\t'));
        // console.log($res);

    }

    //----------- TEST -------------
    useEffect(() => {        
        test();
    }, []);

    //#region [TEST]
    /**
     * Funcion sobre los test
     */
    function test() {

        console.group("----------- TEST -----------");

        console.groupCollapsed("> PlanetTEST()");
        PlanetTest();
        console.groupEnd();

        /**
         * TEST :
         * Test acerca de 'Planet.js'
         */
        function PlanetTest() {

            console.log(">> checkStatusAPI_Call_TEST()");
            checkStatusAPI_Call_TEST();

            /**
             * Test que nos muestra lac acciones de diferentes URLS
             */
            function checkStatusAPI_Call_TEST() {

                //#region @Unused
                // // 200
                // diferentesStatus(200, "https://datos.gob.es/apidata/catalog/distribution?_sort=title&_pageSize=10&_page=0");
                // // 403
                // diferentesStatus(404, "https://api.github.com/search/r");
                // // 404
                // diferentesStatus(443, "https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo/404");
                // // 400
                // diferentesStatus(400, "https://api.stackexchange.com/2.2/answers?order=400");
                // // 102
                // diferentesStatus(102, "https://graph.facebook.com//17895695668004550/comments");
                // #endregion


                // @TEST 
                var methodSend = "http"
                var port = 5000
                var url_initial = methodSend + "://localhost:" + port;
                //#region [ok]
                // diferentesStatus(200, url_initial + "/api/author/get");
                // diferentesStatus(200, url_initial + "/api/author/get/1");
                // diferentesStatus(200, url_initial + "/api/author/get", 1);
                // diferentesStatus(200, url_initial + "/api/author/get/1", 1);
                // diferentesStatus(200, url_initial + "/api/author/add", 2);
                diferentesStatus(500, url_initial + "/api/author/del/99999",3);

                //#endregion
                

                // diferentesStatus(33, url_initial + "/api/author/del/9999");
                // diferentesStatus(33, url_initial + "/api/author/edit/");
                // diferentesStatus(33, url_initial + "/api/author/edit/");
                // diferentesStatus(33, url_initial + "/api/author/add");
                // diferentesStatus(33, url_initial + "/api/author/add", 1);

                /**
                 * Nos formatea la salida del test de
                 * @param {number} $num_status {404}
                 * @param {string} $url_status  {url}
                 */
                // function diferentesStatus($num_status, $url_status) {
                //     console.log(">>> Test %d", $num_status)
                //     var name_status = "\tURL_" + $num_status;
                //     console.log("%s => Expect %s : ", name_status, $num_status);
                //      checkStatusAPI_Call($url_status);                    
                // }

                /**
                 * Nos formatea la salida del test de
                 * @param {number} $num_status {404}
                 * @param {string} $url_status  {url}
                 * @param {number} $num_method  {1}
                 */
                function diferentesStatus($num_status, $url_status, $num_method = isRequired('number')) {
                    console.log(">>> Test %d", $num_status)
                    var name_status = "\tURL_" + $num_status;
                    console.log("%s => Expect %s : ", name_status, $num_status);
                    checkStatusAPI_Call_Method_GET($url_status,$num_method)
                    
                }
            }
        }
    }
    /**
     * El parametro es requerido
     */
    var isRequired = function (type) {
        // throw new Error( 'Missing parameter ' + type );
        console.error( 'Missing parameter ' + type );
    };
    //#endregion
    // (function get_m(){
    //     fetch('http://localhost:5000/api/author/get', {method: 'GET'}) //Ejemplo con 'GET'
    //     .then(result=>result.json())
    //     .then(items=>this.setState({items}));
    // })();
    // #region [ok]
    return (
        <div className="jk">
            <div>
                <pre>
                    {JSON.stringify(planets, null, 3)}
                </pre>
            </div>
            {/* <hr />
      <span>Has error: {JSON.stringify()}</span> */}
            {/* <ul>
                {this.state.items.map( item => <li>{item}</li>)}
            </ul> */}
        
        </div>
    );
    // #endregion

}
export default Planets;