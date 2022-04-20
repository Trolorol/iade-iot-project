function publishWithMqtt() {
  //mosquitto_sub -h localhost -t "test/topic" isto é um exemplo em linux
  //publish "user_id/device_id"
  //Retiras que tens uma lista com o nome do user_id/device_id
  // que serve para comunicação entre aquele device daquele user
  // É necessario fazer um puiblish com o nome do user_id/device_id para o pedido ir parar ao device que está a escutar aquele lista especifica
}



mosquitto_sub -h ;
mqtt.eclipseprojects.io -t;
 "ProjetoIoT/iade"

const topic = '/sensor/temperatura'
client.on('connect', () => {
  console.log('Connected')
  client.subscribe([sensor/temperatura], () => {
    console.log(`Subscribe to topic '${sensor/temperatura}'`)   //Subscribe ao tópico sensor/temperatura
  })
})

client.on('message', (sensor/temperatura, payload) => {
  console.log('Received Message:', sensor/temperatura, payload.toString()) //converter mensagem buffer type para string
})

client.on('connect', () => {
  client.publish(sensor/temperatura, 'nodejs mqtt teste', { qos: 0, retain: false }, (error) => {  //publish no tópico sensor/temperatura
    if (error) {
      console.error(error)
    }
  })
})



