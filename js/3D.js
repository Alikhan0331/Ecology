var scene1 = new THREE.Scene();
scene1.background = new THREE.Color(0xd1ffb6)
var camera1 = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer1 = new THREE.WebGLRenderer();
renderer1.setSize(window.innerWidth * 0.4, window.innerHeight*0.7);
document.getElementById("goodeco").appendChild(renderer1.domElement);
var controls1 = new THREE.OrbitControls(camera1, renderer1.domElement);
camera1.position.z = 6;
camera1.position.y = 4;
camera1.position.x = 0.5;

// Вторая сцена
var scene2 = new THREE.Scene();
scene2.background = new THREE.Color(0xd1ffb6)
var camera2 = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer2 = new THREE.WebGLRenderer();
renderer2.setSize(window.innerWidth * 0.9, window.innerHeight*0.9);
document.getElementById("badeco").appendChild(renderer2.domElement);
var controls2 = new THREE.OrbitControls(camera2, renderer2.domElement);
camera2.position.z = 6;
camera2.position.y = 5.5;
camera2.position.x = 0.5;

// Загрузка модели для первой сцены
var loader1 = new THREE.GLTFLoader();
var model1;
loader1.load('./models/island/goodddd.gltf', function (gltf) {
  model1 = gltf.scene;
  model1.scale.set(1.5, 1.5, 1.5);
  scene1.add(model1);

}, undefined, function (error) {
  console.error(error);
});

// Загрузка модели для второй сцены
var loader2 = new THREE.GLTFLoader();
var model2;
loader2.load('./models/island2/badddd.gltf', function (gltf) {
  model2 = gltf.scene;
  model2.scale.set(1.6, 1.6, 1.6);
  scene2.add(model2);
}, undefined, function (error) {
  console.error(error);
});

// Создание источника света для первой сцены
var light1 = new THREE.DirectionalLight(0xffffff, 1);
light1.position.set(1, 1, 1).normalize();
scene1.add(light1);

// Создание источника света для второй сцены
var light2 = new THREE.DirectionalLight(0xffffff, 2);
light2.position.set(1, 1, 1).normalize();
scene2.add(light2);

// Анимационный цикл для первой сцены
function animate1() {
  requestAnimationFrame(animate1);
  if (model1) {
    model1.rotation.y += 0.001; // Уменьшаем скорость вращения
  }
  renderer1.render(scene1, camera1);
  controls1.update();
}
animate1();

// Анимационный цикл для второй сцены
function animate2() {
  requestAnimationFrame(animate2);
  if (model2) {
    model2.rotation.y += 0.001; // Уменьшаем скорость вращения
  }
  renderer2.render(scene2, camera2);
  controls2.update();
}
animate2();