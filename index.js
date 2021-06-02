
const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0xffffff, 10, 140);

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );




const loader = new THREE.GLTFLoader();



loader.load(

	'./mario_walking (2).glb',
	function ( gltf ) {

		scene.add( gltf.scene );

	},
    
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},

	function ( error ) {

		console.log( 'An error happened' + error);

	}
);
renderer.outputEncoding = THREE.sRGBEncoding;


var stats;
stats = new Stats();
stats.setMode(2); 
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "100px";
stats.domElement.style.top = "10px";
document.getElementById("myStats").appendChild(stats.domElement);


const light = new THREE.AmbientLight( 0xffffff, 1 );
light.position.set( 80, 100, 100 );
scene.add( light );

controls = new THREE.OrbitControls(camera, renderer.domElement);

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    controls.update();
    stats.update();
}
animate();

