if(!self.define){let e,a={};const s=(s,n)=>(s=new URL(s+".js",n).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(a[i])return;let d={};const o=e=>s(e,i),b={module:{uri:i},exports:d,require:o};a[i]=Promise.all(n.map((e=>b[e]||o(e)))).then((e=>(r(...e),d)))}}define(["./workbox-1ab968a5"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"_astro/app.CUaA5eZ4.js",revision:null},{url:"_astro/client.Dp6XiWBe.js",revision:null},{url:"_astro/index.7m__3goK.css",revision:null},{url:"_astro/index.CHPBpGZv.css",revision:null},{url:"_astro/index.e1658aa6.DimpqQtX.js",revision:null},{url:"_astro/index.nFrfLeHB.js",revision:null},{url:"favicon.svg",revision:"a8ccf173a79140e5de766549febd3b91"},{url:"fonts/fraunces-v31-latin-600.woff2",revision:"15892d81fdc74f8965f8f4e2c7b32ee5"},{url:"fonts/inter-tight-v7-latin-600.woff2",revision:"3fe302c6be522bab651be55facf31849"},{url:"fonts/inter-tight-v7-latin-700.woff2",revision:"4e5abb7536ed918477c080d7074ce758"},{url:"fonts/inter-v13-latin-500.woff2",revision:"96948ea7ac03e6e7bfb59c582357ea90"},{url:"fonts/inter-v13-latin-regular.woff2",revision:"73aaa95eab3115ea5a1e5c1cf16ea645"},{url:"index.html",revision:"432c956ad45a30a45311e03a2ec9a8ac"},{url:"logo.svg",revision:"ae0a4f3ae2105cbc072b8520d6dfb8d4"},{url:"manifest.webmanifest",revision:"9e46ab73720c84410dabed63441b5447"},{url:"maskable/maskable-128x128.png",revision:"37eb1ef6cc417d0836fe23523d4f87b7"},{url:"maskable/maskable-144x144.png",revision:"ce887efcf7a0d21918563e678cc6cdf7"},{url:"maskable/maskable-152x152.png",revision:"8dc703a1fcaf2c0749091bc6ad2b90b7"},{url:"maskable/maskable-192x192.png",revision:"e6380274c6201efce8162237db4ac3e4"},{url:"maskable/maskable-384x384.png",revision:"c800f8ecee88a335482edba3b9a4fefb"},{url:"maskable/maskable-512x512.png",revision:"13b7056f81e7e071d15ad01199e5caa0"},{url:"maskable/maskable-72x72.png",revision:"26ff28d317f335b95a1fd53e542696d4"},{url:"maskable/maskable-96x96.png",revision:"350100ec70fff2444145086780cdd3d3"},{url:"maskable/maskable.svg",revision:"dbad950f7d9622a44dea5fcfba9e260b"},{url:"og.png",revision:"94da9d2454d0d4b1929fcdfe3c7107dc"},{url:"registerSW.js",revision:"e15c927410519053ee401b793fcbeb7b"},{url:"robots.txt",revision:"735ab4f94fbcd57074377afca324c813"},{url:"sounds/alarm.mp3",revision:"4ade824acb969db8fc507ac6e89e604a"},{url:"sounds/animals/birds.mp3",revision:"eb6aba2e51dde8b539818f0beb17e218"},{url:"sounds/animals/cat-purring.mp3",revision:"85f7529cafc4564dd483b462016eb786"},{url:"sounds/animals/crickets.mp3",revision:"cb6c887d7fbf837dbf31832a6faaac57"},{url:"sounds/animals/crows.mp3",revision:"c6bf2141ae033432de3617c6adbf3159"},{url:"sounds/animals/dog-barking.mp3",revision:"08b4280f156d9dc22a927bb50ca3d4cf"},{url:"sounds/animals/frog.mp3",revision:"0c13149012767f0a4b66d546578a956f"},{url:"sounds/animals/horse-galopp.mp3",revision:"6344cebc026280da0e7a9e7e55114257"},{url:"sounds/animals/owl.mp3",revision:"13420cabeaf79dc6828accd9286b61af"},{url:"sounds/animals/seagulls.mp3",revision:"3fa8632aeb3b2d3daa5c3d23dc892bfa"},{url:"sounds/animals/whale.mp3",revision:"2e26fc4f64f420c44a4b7c64f0899c45"},{url:"sounds/animals/wolf.mp3",revision:"4d85bc731d9dbe2db48936260989b678"},{url:"sounds/binaural/binaural-alpha.wav",revision:"0d7af3651bc14e92cc43a1d43bea3285"},{url:"sounds/binaural/binaural-beta.wav",revision:"72f31b1d0c80a154ed1ebbc6f6f1c9d0"},{url:"sounds/binaural/binaural-delta.wav",revision:"6c6d639b86d9d0f6ee82d826948657be"},{url:"sounds/binaural/binaural-gamma.wav",revision:"107b97c70268940b9a0a506e89df9eee"},{url:"sounds/binaural/binaural-theta.wav",revision:"a162ef64b59cfa62c568cd457682da77"},{url:"sounds/nature/campfire.mp3",revision:"986f04754a1ee57656253d183edcedc6"},{url:"sounds/nature/droplets.mp3",revision:"6fae6a51735639bfcd1c19e2b0dbd8a7"},{url:"sounds/nature/howling-wind.mp3",revision:"996cc5024d27c26c6d6716e27b844ece"},{url:"sounds/nature/jungle.mp3",revision:"a43e689cf0e00fc44d75dffa40d41c92"},{url:"sounds/nature/river.mp3",revision:"391c47113c0fa007fbd6b39404c29524"},{url:"sounds/nature/walk-in-snow.mp3",revision:"416c152f369da6ecd5f08a02813706d7"},{url:"sounds/nature/walk-on-leaves.mp3",revision:"d2d2adb08960f1c13ff7eda73944dfd7"},{url:"sounds/nature/waterfall.mp3",revision:"87d5048873ef3fc17c66e49f4790e079"},{url:"sounds/nature/waves.mp3",revision:"7975ad8ddc6c493cee5662c3a5e57e30"},{url:"sounds/nature/wind-in-trees.mp3",revision:"3c4f78103521e023153b87de904dec7b"},{url:"sounds/nature/wind.mp3",revision:"403eb6d670aca274f95bbda9e23f5544"},{url:"sounds/noise/brown-noise.wav",revision:"ebade8fb2f38ef594104ef4c0d02bb30"},{url:"sounds/noise/pink-noise.wav",revision:"5b7ad3205d84a01f74a1a856e635bff8"},{url:"sounds/noise/white-noise.wav",revision:"47d46f6a3887b393cd6a8d1f6926b782"},{url:"sounds/places/airport.mp3",revision:"f5412a6405dd6baf7bb869dc5fe65da0"},{url:"sounds/places/cafe.mp3",revision:"472c3864f9590de10d37e0f6c8474e40"},{url:"sounds/places/carousel.mp3",revision:"f706c6b94c401295fff3b1521b7c3239"},{url:"sounds/places/church.mp3",revision:"fee75316b62035eca376ab8e5263cdff"},{url:"sounds/places/construction-site.mp3",revision:"bae82ee039be51ead99669eb2d4282c7"},{url:"sounds/places/crowded-bar.mp3",revision:"679f0bae4b65481025779f9c1ee1878a"},{url:"sounds/places/laboratory.mp3",revision:"46ab395ff613819f4a089407234fad2e"},{url:"sounds/places/laundry-room.mp3",revision:"3cc591ffad78ed9762e26f40c7a1c9ed"},{url:"sounds/places/night-village.mp3",revision:"a9b10f2ea5a00fad9040c1e7f1f14885"},{url:"sounds/places/office.mp3",revision:"e6d1cd1da40a060ef1b7dac1c69ffb3f"},{url:"sounds/places/subway-station.mp3",revision:"351249769c490e8c353b8937a66d57fc"},{url:"sounds/places/supermarket.mp3",revision:"449d7be2e8f892c5ca32d090131fcfa2"},{url:"sounds/places/temple.mp3",revision:"86295f67823bb20ee1d4eadb176a26e6"},{url:"sounds/places/underwater.mp3",revision:"0f60307fb6848415fd6b33e01edd71fd"},{url:"sounds/rain/heavy-rain.mp3",revision:"db2a993947f2ebd8252b5c3472c79f30"},{url:"sounds/rain/light-rain.mp3",revision:"95a892e256642be1b7cf2bf3d2c69621"},{url:"sounds/rain/rain-on-leaves.mp3",revision:"df98325f8a26b562b39d0f465dd71371"},{url:"sounds/rain/rain-on-tent.mp3",revision:"885b028397c47e789d9cf3db22744427"},{url:"sounds/rain/rain-on-umbrella.mp3",revision:"a951a935e15bd33b2a9dcf89a107f501"},{url:"sounds/rain/rain-on-window.mp3",revision:"2af6d8fcf33a575929956aaf420e782f"},{url:"sounds/rain/thunder.mp3",revision:"e3ab5eb2f523dbaa370ae39b233d931e"},{url:"sounds/things/boiling-water.mp3",revision:"073be35c459a1f9ae340489219b88ade"},{url:"sounds/things/bubbles.mp3",revision:"5c5afa40785b009c77cbe566a5995505"},{url:"sounds/things/ceiling-fan.mp3",revision:"a942354ce2aa48c94d73f592eead4191"},{url:"sounds/things/clock.mp3",revision:"bccfe4175f23be021fcaa033d6ce3c99"},{url:"sounds/things/dryer.mp3",revision:"0bc68b24aac83f0f9c15ee5d7296067f"},{url:"sounds/things/keyboard.mp3",revision:"ebe9a33ac2ddc58e0527254e4a40bf4b"},{url:"sounds/things/morse-code.mp3",revision:"d53d26d6673297ba2be7eef29f7c963b"},{url:"sounds/things/paper.mp3",revision:"03c2875589df5f3e5dab70d36559bec3"},{url:"sounds/things/singing-bowl.mp3",revision:"fdcc4a2621925a017477d4bcb050d709"},{url:"sounds/things/slide-projector.mp3",revision:"859e210643400ee26c8f9e1d7a027deb"},{url:"sounds/things/tuning-radio.mp3",revision:"d8b246be9d4c73377d6a467f22a7c9b8"},{url:"sounds/things/typewriter.mp3",revision:"277d03e44f127106d601e1019916aad4"},{url:"sounds/things/washing-machine.mp3",revision:"149fbc010a7ba905b81a1b2ffc9a24e4"},{url:"sounds/things/wind-chimes.mp3",revision:"4a8959b006b55f0e7123a6fe1ec8ed2f"},{url:"sounds/transport/airplane.mp3",revision:"508322b1546cbcb8cd05766039ffe1ed"},{url:"sounds/transport/inside-a-train.mp3",revision:"db55d82669702d99e60b2580f33248c8"},{url:"sounds/transport/rowing-boat.mp3",revision:"4ef3778cef52b755aa326296b0105a25"},{url:"sounds/transport/sailboat.mp3",revision:"287b95933e191ac11b5b72b0db7e025f"},{url:"sounds/transport/submarine.mp3",revision:"e84c39196278745fb7f2279e1ce0acd5"},{url:"sounds/transport/train.mp3",revision:"7f1e4243d9482ade5f68107ee27178ab"},{url:"sounds/urban/ambulance-siren.mp3",revision:"440cb9902db6ea8a7ab697e141613758"},{url:"sounds/urban/busy-street.mp3",revision:"90e3ad4a1322b178a5b63ed039da7685"},{url:"sounds/urban/crowd.mp3",revision:"791b947c67782b2c438fba6eef931005"},{url:"sounds/urban/fireworks.mp3",revision:"c0101badbcce7c1edbcae53f1edf0ad6"},{url:"sounds/urban/highway.mp3",revision:"979e30cb8e2099a0f158eefbd99fc06b"},{url:"sounds/urban/road.mp3",revision:"2b6ca65e72668b4152bb0d192a191864"},{url:"sounds/urban/traffic.mp3",revision:"6d02bb7743184aae888adabdf52ca8f7"},{url:"sw.js.map",revision:"5e94506ffe464812c3cc6f70f403a3d2"},{url:"workbox-1ab968a5.js.map",revision:"954e45d134f07fbdd8c1a22d2947822e"},{url:"favicon.svg",revision:"a8ccf173a79140e5de766549febd3b91"},{url:"logo.svg",revision:"ae0a4f3ae2105cbc072b8520d6dfb8d4"},{url:"og.png",revision:"94da9d2454d0d4b1929fcdfe3c7107dc"},{url:"robots.txt",revision:"735ab4f94fbcd57074377afca324c813"},{url:"fonts/fraunces-v31-latin-600.woff2",revision:"15892d81fdc74f8965f8f4e2c7b32ee5"},{url:"fonts/inter-tight-v7-latin-600.woff2",revision:"3fe302c6be522bab651be55facf31849"},{url:"fonts/inter-tight-v7-latin-700.woff2",revision:"4e5abb7536ed918477c080d7074ce758"},{url:"fonts/inter-v13-latin-500.woff2",revision:"96948ea7ac03e6e7bfb59c582357ea90"},{url:"fonts/inter-v13-latin-regular.woff2",revision:"73aaa95eab3115ea5a1e5c1cf16ea645"},{url:"maskable/maskable-128x128.png",revision:"37eb1ef6cc417d0836fe23523d4f87b7"},{url:"maskable/maskable-144x144.png",revision:"ce887efcf7a0d21918563e678cc6cdf7"},{url:"maskable/maskable-152x152.png",revision:"8dc703a1fcaf2c0749091bc6ad2b90b7"},{url:"maskable/maskable-192x192.png",revision:"e6380274c6201efce8162237db4ac3e4"},{url:"maskable/maskable-384x384.png",revision:"c800f8ecee88a335482edba3b9a4fefb"},{url:"maskable/maskable-512x512.png",revision:"13b7056f81e7e071d15ad01199e5caa0"},{url:"maskable/maskable-72x72.png",revision:"26ff28d317f335b95a1fd53e542696d4"},{url:"maskable/maskable-96x96.png",revision:"350100ec70fff2444145086780cdd3d3"},{url:"maskable/maskable.svg",revision:"dbad950f7d9622a44dea5fcfba9e260b"},{url:"sounds/alarm.mp3",revision:"4ade824acb969db8fc507ac6e89e604a"},{url:"sounds/animals/birds.mp3",revision:"eb6aba2e51dde8b539818f0beb17e218"},{url:"sounds/animals/cat-purring.mp3",revision:"85f7529cafc4564dd483b462016eb786"},{url:"sounds/animals/crickets.mp3",revision:"cb6c887d7fbf837dbf31832a6faaac57"},{url:"sounds/animals/crows.mp3",revision:"c6bf2141ae033432de3617c6adbf3159"},{url:"sounds/animals/dog-barking.mp3",revision:"08b4280f156d9dc22a927bb50ca3d4cf"},{url:"sounds/animals/frog.mp3",revision:"0c13149012767f0a4b66d546578a956f"},{url:"sounds/animals/horse-galopp.mp3",revision:"6344cebc026280da0e7a9e7e55114257"},{url:"sounds/animals/owl.mp3",revision:"13420cabeaf79dc6828accd9286b61af"},{url:"sounds/animals/seagulls.mp3",revision:"3fa8632aeb3b2d3daa5c3d23dc892bfa"},{url:"sounds/animals/whale.mp3",revision:"2e26fc4f64f420c44a4b7c64f0899c45"},{url:"sounds/animals/wolf.mp3",revision:"4d85bc731d9dbe2db48936260989b678"},{url:"sounds/binaural/binaural-alpha.wav",revision:"0d7af3651bc14e92cc43a1d43bea3285"},{url:"sounds/binaural/binaural-beta.wav",revision:"72f31b1d0c80a154ed1ebbc6f6f1c9d0"},{url:"sounds/binaural/binaural-delta.wav",revision:"6c6d639b86d9d0f6ee82d826948657be"},{url:"sounds/binaural/binaural-gamma.wav",revision:"107b97c70268940b9a0a506e89df9eee"},{url:"sounds/binaural/binaural-theta.wav",revision:"a162ef64b59cfa62c568cd457682da77"},{url:"sounds/nature/campfire.mp3",revision:"986f04754a1ee57656253d183edcedc6"},{url:"sounds/nature/droplets.mp3",revision:"6fae6a51735639bfcd1c19e2b0dbd8a7"},{url:"sounds/nature/howling-wind.mp3",revision:"996cc5024d27c26c6d6716e27b844ece"},{url:"sounds/nature/jungle.mp3",revision:"a43e689cf0e00fc44d75dffa40d41c92"},{url:"sounds/nature/river.mp3",revision:"391c47113c0fa007fbd6b39404c29524"},{url:"sounds/nature/walk-in-snow.mp3",revision:"416c152f369da6ecd5f08a02813706d7"},{url:"sounds/nature/walk-on-leaves.mp3",revision:"d2d2adb08960f1c13ff7eda73944dfd7"},{url:"sounds/nature/waterfall.mp3",revision:"87d5048873ef3fc17c66e49f4790e079"},{url:"sounds/nature/waves.mp3",revision:"7975ad8ddc6c493cee5662c3a5e57e30"},{url:"sounds/nature/wind-in-trees.mp3",revision:"3c4f78103521e023153b87de904dec7b"},{url:"sounds/nature/wind.mp3",revision:"403eb6d670aca274f95bbda9e23f5544"},{url:"sounds/noise/brown-noise.wav",revision:"ebade8fb2f38ef594104ef4c0d02bb30"},{url:"sounds/noise/pink-noise.wav",revision:"5b7ad3205d84a01f74a1a856e635bff8"},{url:"sounds/noise/white-noise.wav",revision:"47d46f6a3887b393cd6a8d1f6926b782"},{url:"sounds/places/airport.mp3",revision:"f5412a6405dd6baf7bb869dc5fe65da0"},{url:"sounds/places/cafe.mp3",revision:"472c3864f9590de10d37e0f6c8474e40"},{url:"sounds/places/carousel.mp3",revision:"f706c6b94c401295fff3b1521b7c3239"},{url:"sounds/places/church.mp3",revision:"fee75316b62035eca376ab8e5263cdff"},{url:"sounds/places/construction-site.mp3",revision:"bae82ee039be51ead99669eb2d4282c7"},{url:"sounds/places/crowded-bar.mp3",revision:"679f0bae4b65481025779f9c1ee1878a"},{url:"sounds/places/laboratory.mp3",revision:"46ab395ff613819f4a089407234fad2e"},{url:"sounds/places/laundry-room.mp3",revision:"3cc591ffad78ed9762e26f40c7a1c9ed"},{url:"sounds/places/night-village.mp3",revision:"a9b10f2ea5a00fad9040c1e7f1f14885"},{url:"sounds/places/office.mp3",revision:"e6d1cd1da40a060ef1b7dac1c69ffb3f"},{url:"sounds/places/subway-station.mp3",revision:"351249769c490e8c353b8937a66d57fc"},{url:"sounds/places/supermarket.mp3",revision:"449d7be2e8f892c5ca32d090131fcfa2"},{url:"sounds/places/temple.mp3",revision:"86295f67823bb20ee1d4eadb176a26e6"},{url:"sounds/places/underwater.mp3",revision:"0f60307fb6848415fd6b33e01edd71fd"},{url:"sounds/rain/heavy-rain.mp3",revision:"db2a993947f2ebd8252b5c3472c79f30"},{url:"sounds/rain/light-rain.mp3",revision:"95a892e256642be1b7cf2bf3d2c69621"},{url:"sounds/rain/rain-on-leaves.mp3",revision:"df98325f8a26b562b39d0f465dd71371"},{url:"sounds/rain/rain-on-tent.mp3",revision:"885b028397c47e789d9cf3db22744427"},{url:"sounds/rain/rain-on-umbrella.mp3",revision:"a951a935e15bd33b2a9dcf89a107f501"},{url:"sounds/rain/rain-on-window.mp3",revision:"2af6d8fcf33a575929956aaf420e782f"},{url:"sounds/rain/thunder.mp3",revision:"e3ab5eb2f523dbaa370ae39b233d931e"},{url:"sounds/things/boiling-water.mp3",revision:"073be35c459a1f9ae340489219b88ade"},{url:"sounds/things/bubbles.mp3",revision:"5c5afa40785b009c77cbe566a5995505"},{url:"sounds/things/ceiling-fan.mp3",revision:"a942354ce2aa48c94d73f592eead4191"},{url:"sounds/things/clock.mp3",revision:"bccfe4175f23be021fcaa033d6ce3c99"},{url:"sounds/things/dryer.mp3",revision:"0bc68b24aac83f0f9c15ee5d7296067f"},{url:"sounds/things/keyboard.mp3",revision:"ebe9a33ac2ddc58e0527254e4a40bf4b"},{url:"sounds/things/morse-code.mp3",revision:"d53d26d6673297ba2be7eef29f7c963b"},{url:"sounds/things/paper.mp3",revision:"03c2875589df5f3e5dab70d36559bec3"},{url:"sounds/things/singing-bowl.mp3",revision:"fdcc4a2621925a017477d4bcb050d709"},{url:"sounds/things/slide-projector.mp3",revision:"859e210643400ee26c8f9e1d7a027deb"},{url:"sounds/things/tuning-radio.mp3",revision:"d8b246be9d4c73377d6a467f22a7c9b8"},{url:"sounds/things/typewriter.mp3",revision:"277d03e44f127106d601e1019916aad4"},{url:"sounds/things/washing-machine.mp3",revision:"149fbc010a7ba905b81a1b2ffc9a24e4"},{url:"sounds/things/wind-chimes.mp3",revision:"4a8959b006b55f0e7123a6fe1ec8ed2f"},{url:"sounds/transport/airplane.mp3",revision:"508322b1546cbcb8cd05766039ffe1ed"},{url:"sounds/transport/inside-a-train.mp3",revision:"db55d82669702d99e60b2580f33248c8"},{url:"sounds/transport/rowing-boat.mp3",revision:"4ef3778cef52b755aa326296b0105a25"},{url:"sounds/transport/sailboat.mp3",revision:"287b95933e191ac11b5b72b0db7e025f"},{url:"sounds/transport/submarine.mp3",revision:"e84c39196278745fb7f2279e1ce0acd5"},{url:"sounds/transport/train.mp3",revision:"7f1e4243d9482ade5f68107ee27178ab"},{url:"sounds/urban/ambulance-siren.mp3",revision:"440cb9902db6ea8a7ab697e141613758"},{url:"sounds/urban/busy-street.mp3",revision:"90e3ad4a1322b178a5b63ed039da7685"},{url:"sounds/urban/crowd.mp3",revision:"791b947c67782b2c438fba6eef931005"},{url:"sounds/urban/fireworks.mp3",revision:"c0101badbcce7c1edbcae53f1edf0ad6"},{url:"sounds/urban/highway.mp3",revision:"979e30cb8e2099a0f158eefbd99fc06b"},{url:"sounds/urban/road.mp3",revision:"2b6ca65e72668b4152bb0d192a191864"},{url:"sounds/urban/traffic.mp3",revision:"6d02bb7743184aae888adabdf52ca8f7"},{url:"manifest.webmanifest",revision:"9e46ab73720c84410dabed63441b5447"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=sw.js.map
