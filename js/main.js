// * ~ * f l o r a l s h o p p e * ~ * scene
var container;
var lights = {};
var camera,
  scene,
  renderer,
  controls;
var clock,
  time,
  delta;

// objects
var helios;

// etc
var colorPink = 0xF1889D;
var colorGreen = 0x92FABE;

// run loop
init();
animate();

function init() {
  setupEnvironment();
  loadAssets();
  addGridFloor();
}

function setupEnvironment() {
  clock = new THREE.Clock();

  container = document.getElementById('Background');
  lights.ambient = new THREE.AmbientLight(0xffffff, 0.25);
  lights.point = new THREE.SpotLight(0xffffff);
  lights.point.castShadow = true;
  lights.point.shadow.camera.near = 0.5;

  lights.point.position.x = -2;
  lights.point.position.y = 5;
  lights.point.position.z = 2;

  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
  // controls = new THREE.OrbitControls(camera);
  camera.position.z = 8;
  // controls.update();

  scene = new THREE.Scene();
  scene.background = new THREE.Color(colorPink);
  scene.add(lights.ambient);
  scene.add(lights.point);
  scene.add(camera);

  // var helper = new THREE.CameraHelper(lights.point.shadow.camera); scene.add(helper);

  function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  window.addEventListener('resize', onWindowResize, false);

  renderer = new THREE.WebGLRenderer();
  renderer.shadowMap.enabled = true;
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);
}

function loadAssets() {
  var manager = new THREE.LoadingManager();
  manager.onProgress = console.log;

  var loader = new THREE.OBJLoader(manager);
  loader.load('/sketch/floral-shoppe/helios.obj', loadedHelios, console.log, console.error);
}

function loadedHelios(mesh) {
  var material = new THREE.MeshStandardMaterial({color: 0xffffff});
  mesh.traverse(function(child) {
    if (child instanceof THREE.Mesh) {
      child.material = material;
      child.castShadow = true;
    }
  });

  // mesh bounding box (centering)
  var box = new THREE.Box3().setFromObject(mesh);
  box.getCenter(mesh.position);
  mesh.position.multiplyScalar(-1);

  helios = new THREE.Group();
  helios.add(mesh);
  helios.scale.multiplyScalar(0.9);

  var geometry = new THREE.BoxGeometry(1, 1, 1);
  var cube = new THREE.Mesh(geometry, material);
  cube.receiveShadow = true;

  cube.scale.x = 3;
  cube.scale.y = 0.3;
  cube.scale.z = 3;
  cube.position.y = -2.5;

  heliosWithStand = new THREE.Group();
  heliosWithStand.add(helios);
  heliosWithStand.add(cube);
  heliosWithStand.position.x = 1.5;
  heliosWithStand.position.z = -1.5;
  scene.add(heliosWithStand);
}

function addGridFloor() {
  var mat = new THREE.MeshBasicMaterial({color: 0x111111, side: THREE.DoubleSide});
  for (var y = -1; y < 20; y++) {
    for (var x = -50; x < 50; x++) {
      var xodd = x % 2;
      var yodd = y % 2;
      if (yodd && !xodd || !yodd && xodd) 
        continue;
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

function updateTime() {
  time = clock.getElapsedTime();
  delta = clock.getDelta();
}

function animate() {
  requestAnimationFrame(animate);
  // controls.update();
  updateTime();
  render();
}

function render() {
  updateHelios();
  updateLights();

  camera.lookAt(scene.position);
  renderer.render(scene, camera);
}

function updateHelios() {
  if (!helios) {
    return;
  }
  helios.position.y = 0.25 + Math.sin(time * 2) * 0.25;
  helios.rotation.y = -time;
}

function updateLights() {
  if (!lights || !lights.point) {
    return;
  }
}
