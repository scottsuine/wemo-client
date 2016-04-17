var Wemo = require('../index');
var wemo = new Wemo();

function foundDevice(device) {
  if (device.deviceType === Wemo.DEVICE_TYPE.Maker) {
    console.log('Wemo Maker found: %s', device.friendlyName);

    var client = this.client(device);
    client.on('attributeList', function(name, value) {
      console.log('Wemo Maker "%s" changed %s to %s', this.device.friendlyName, name, value);
    });

    client.getAttributes(function(err, attributes) {
      if (!err) {
        console.log('Wemo Maker attributes:', attributes);
      }
    });
  }

}

wemo.discover(foundDevice);
