// * ~ * f l o r a l s h o p p e * ~ *

var container;

var lights = {};
var camera, scene, renderer;

var helios;

var clock, time, delta;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

var colorPink = 0xF1889D;

init();
animate();

function onLoading(xhr) {
  if (xhr.lengthComputable) {
    var percentComplete = xhr.loaded / xhr.total * 100;
    console.log(Math.round(percentComplete, 2) + '% downloaded');
  }
}

function init() {
  clock = new THREE.Clock();

  container = document.getElementById('Background');

  lights.ambient = new THREE.AmbientLight(0x999999, 0.3);
  lights.point = new THREE.PointLight(0xffffff, 0.8);

  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
  camera.position.x = 0;
  camera.position.z = 8;
  camera.add(lights.point);

  scene = new THREE.Scene();
  scene.background = new THREE.Color(colorPink);
  scene.add(lights.ambient);
  scene.add(camera);

  // addAxisLines();
  addGridFloor();

  var manager = new THREE.LoadingManager();
  manager.onProgress = function(item, loaded, total) {
    console.log(item, loaded, total);
  };

  var loader = new THREE.OBJLoader(manager);
  loader.load('sketch/floral-shoppe/helios.obj', loadedHelios, onLoading, console.error);

  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);
  render();
}

function updateTime() {
  time = clock.getElapsedTime();
  delta = clock.getDelta();
}

function render() {
  updateTime();
  updateHelios();

  camera.lookAt(scene.position);
  renderer.render(scene, camera);
}

function addGridFloor() {
  var mat = new THREE.MeshBasicMaterial({
    color: 0x111111,
    side: THREE.DoubleSide
  });
  for (var y = 0; y < 30; y++) {
    for (var x = -10; x < 20; x++) {
      var xodd = x % 2;
      var yodd = y % 2;
      if (yodd && !xodd || !yodd && xodd) continue;
      scene.add(gridSquare(x, y, mat));
    }
  }
}


function gridSquare(x, y, mat) {
  var geometry = new THREE.PlaneGeometry();
  var plane = new THREE.Mesh(geometry, mat);
  plane.position.x = x;
  plane.position.y = -3;
  plane.position.z = -y;
  plane.rotation.x = Math.PI / 2;
  return plane;
}

var pivot;

function loadedHelios(mesh) {
  scene.add(mesh);
  helios = mesh;

  // centering
  var box = new THREE.Box3().setFromObject(mesh);
  box.getCenter(mesh.position);
  mesh.position.multiplyScalar(-1);

  pivot = new THREE.Group();
  pivot.position.x = 1.8;
  scene.add(pivot);
  pivot.add(mesh);
}

function updateHelios() {
  if (!helios) {
    return;
  }
  pivot.position.y = Math.sin(time * 2) * 0.25;
  pivot.rotation.y += delta * 5000;
}