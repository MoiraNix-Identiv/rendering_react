import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

import { ColorCorrectionShader } from 'three/addons/shaders/ColorCorrectionShader.js';
import { FXAAShader } from 'three/addons/shaders/FXAAShader.js';

import { createRoot } from 'react-dom/client';
import React, { useRef, useState } from 'react';
import {Canvas, useLoader} from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader'


export default function Scene(){

    return(
        <div id="canvas-container">
            <Canvas>
                <mesh>
                    <meshBasicMaterial>
                        
                    </meshBasicMaterial>
                </mesh>
            </Canvas>
        </div>
    )
}

let renderer2d, scene2d, camera2d, container2d = document.getElementById("canvas_container2d");
let renderer3d, scene3d, camera3d, bloomComposer, finalComposer, container3d = document.getElementById("canvas_container3d");

const [textureAlarm, textureLight] = useLoader(TextureLoader, ['flare.jpg', 'texture_star.png']);

const Testing = () => {
    return <h1>Test</h1>;
  };
  

const geometry2dS = () => { <sphereGeometry args={[ .15, 16, 8 ]}/>};
const geometry3dS = () => { <sphereGeometry args={[ 1, 16, 8 ]}/>};

const BLOOM_SCENE = 1;

const bloomLayer = () => { <layers/>}; 
bloomLayer.set( BLOOM_SCENE );

const params = {
    threshold: 0,
    strength: 1,
    //og .5 rad
    radius: 1,
    exposure: 1
};

const darkMaterial = () => { <THREE.MeshBasicMaterial color= 'black' />};
const materials = {};

//NOTE: shapes need a mesh to colour them.  Only some materials interact with light, thus the non default mesh.
const alarmMaterial = () => { 
    <THREE.PointsMaterial
        size='5'
        color= "#ffffff"
        transparent= 'true'
        opacity= '0.8'
        map=  {textureAlarm}
        blending= {<THREE.AdditiveBlending/>}

    />
};

/*
    Updated A/N: 
    IF.  Iffff we want to display multiples of these at a time, we need multiple materials.
    Otherwise, we can swap back to one general mesh for spheres/cylinders.

    There are four of these in order to change the colour of the shapes individually.  
    Changing the colour of a shape is done by changing the colour of the material, 
    so in order to have them all not be the same colour when the colour of one is changed,
    we need a material for each.
*/
const lightMaterial1 = () => { 
    
    <THREE.PointsMaterial
        size='5'
        color= "#ffffff"
        transparent= 'true'
        opacity= '0.8'
        map=  {textureLight}
        blending= {<THREE.AdditiveBlending/>}

    />
};
    

const lightMaterial2 = new THREE.PointsMaterial({ 
    size:5,
    color: "#ffffff",
    transparent: true,
    opacity: 0.8,
    map:  textureLight,
    blending: THREE.AdditiveBlending, 
    
    });

const lightMaterial3 = new THREE.PointsMaterial({ 
    size:5,
    color: "#ffffff",
    transparent: true,
    opacity: 0.8,
    map:  textureLight,
    blending: THREE.AdditiveBlending, 
    
    });

const lightMaterial4 = new THREE.PointsMaterial({ 
    size:5,
    color: "#ffffff",
    transparent: true,
    opacity: 0.8,
    map:  textureLight,
    blending: THREE.AdditiveBlending, 
    
    });

//ortho variables
//stopped here
//const sphereDoor = () => { <THREE.Mesh( geometry2dS, alarmMaterial );
const sphereWinLow = new THREE.Mesh( geometry2dS, alarmMaterial );
const sphereWinUp = new THREE.Mesh( geometry2dS, alarmMaterial );
const lightDoor = new THREE.PointLight(0xff0000, 10, 5);
const lightWinLower = new THREE.PointLight(0xff0000, 10, 5);
const lightWinUpper = new THREE.PointLight(0xff0000, 10, 5);

//perspective variables
const sphereb1 = new THREE.Mesh( geometry3dS, lightMaterial1 );
const sphereb2 = new THREE.Mesh( geometry3dS, lightMaterial2 );
const sphereb3 = new THREE.Mesh( geometry3dS, lightMaterial3 );
const sphereb4 = new THREE.Mesh( geometry3dS, lightMaterial4 );
const lightb1 = new THREE.PointLight(0xff0000, 100, 15, 3);
const lightb2 = new THREE.PointLight(0xff0000, 100, 15, 3);
const lightb3 = new THREE.PointLight(0xff0000, 100, 15, 3);
const lightb4 = new THREE.PointLight(0xff0000, 100, 15, 3);
const spotlightb1 = new THREE.SpotLight(0xffffff, 100);
const spotlightb2 = new THREE.SpotLight(0xffffff, 100);
const spotlightb3 = new THREE.SpotLight(0xffffff, 100);
const spotlightb4 = new THREE.SpotLight(0xffffff, 100);


//just so I don't have to keep mousing over the method:
//(rad top, rad bot, height, radial segments, height segments, open-ended?, theta first segment, theta circular section (less makes partial cyl))
var geometryC = new THREE.CylinderGeometry( .5, .5, 50, 64, 20, true);

//see above for explanation of why there's four of these.  May be unnecessary.  Like this comment haha.
var sMaterial1 =  new THREE.PointsMaterial({ 
    size:5,
    color: "#ffffff",
    transparent: true,
    opacity: 0.3,
    map:  textureLight,
    blending: THREE.AdditiveBlending, 
    
    });

var sMaterial2 =  new THREE.PointsMaterial({ 
    size:5,
    color: "#ffffff",
    transparent: true,
    opacity: 0.3,
    map:  textureLight,
    blending: THREE.AdditiveBlending, 
    
    });

var sMaterial3 =  new THREE.PointsMaterial({ 
    size:5,
    color: "#ffffff",
    transparent: true,
    opacity: 0.3,
    map:  textureLight,
    blending: THREE.AdditiveBlending, 
    
    });

var sMaterial4 =  new THREE.PointsMaterial({ 
    size:5,
    color: "#ffffff",
    transparent: true,
    opacity: 0.3,
    map:  textureLight,
    blending: THREE.AdditiveBlending, 
    
    });

var cyl1 = new THREE.Mesh( geometryC, sMaterial1 );
var cyl2 = new THREE.Mesh( geometryC, sMaterial2 );
var cyl3 = new THREE.Mesh( geometryC, sMaterial3 );
var cyl4 = new THREE.Mesh( geometryC, sMaterial4 );

var clock2d = new THREE.Clock();
var clock3d = new THREE.Clock();
var time2d = 0, time3d = 0;
var previousFrameBlinked2d = false, alarmsTriggered2d = false;
var previousFrameBlinked3d = false, alarmsTriggered3d = false;
var twoDInit = false, threeDInit = false;


window.onload = function()
{    
    var btnScene2d = document.getElementById("sceneButton2d");
    btnScene2d.onclick = addScene2d;
    
    var alarmButton2d = document.getElementById("alarmButton2d");
    alarmButton2d.onclick = addAlarms2d;
    //alarmButton.disabled = true;
    alarmButton2d.style.opacity = .4;

    var resetButton2d = document.getElementById("resetButton2d");
    resetButton2d.onclick = resetAlarms2d;
    //resetButton.disabled = true;
    resetButton2d.style.opacity = .4;

    var btnScene3d = document.getElementById("sceneButton3d");
    btnScene3d.onclick = addScene3d;
    
    var alarmButton3d = document.getElementById("alarmButton3d");
    alarmButton3d.onclick = addAlarms3d;
    //alarmButton.disabled = true;
    alarmButton3d.style.opacity = .4;

    var resetButton3d = document.getElementById("resetButton3d");
    resetButton3d.onclick = resetAlarms3d;
    //resetButton.disabled = true;
    resetButton3d.style.opacity = .4;

    window.addEventListener( 'resize', onWindowResize, false );

}

//needs more work into this.  containers will resize pre-generation of a view, but not after.  This does reset the scene though, which is something.
function onWindowResize() {

    //may also need to rescale the parameters fed to the camera
    if(twoDInit){
        const renderTargetWidth2d = container2d.innerWidth;
        const renderTargetHeight2d = container2d.innerHeight;

        camera2d.aspect = renderTargetWidth2d / renderTargetHeight2d;
        camera2d.updateProjectionMatrix();

        renderer2d.setSize( renderTargetWidth2d, renderTargetHeight2d);

    }

    if(threeDInit){
        const renderTargetWidth3d = container3d.innerWidth;
        const renderTargetHeight3d = container3d.innerHeight;

        camera3d.aspect = renderTargetWidth3d / renderTargetHeight3d;
        camera3d.updateProjectionMatrix();

        renderer3d.setSize( renderTargetWidth3d, renderTargetHeight3d);

        bloomComposer.setSize( renderTargetWidth3d, renderTargetHeight3d );
        finalComposer.setSize( renderTargetWidth3d, renderTargetHeight3d );

        render();
    }
    

} 

//wonky values from this, even with compensation suggested online.  use with caution.
/*function getCameraPos()
{
    var newZ = -(camera3d.position.x * Math.cos(5.49779)) - (camera3d.position.z * Math.sin(5.49779));
    var newX = (camera3d.position.x * Math.cos(0.78)) + (camera3d.position.z * Math.sin(0.78));

    document.getElementById("Camera_X"). = "Camera X: " + newX + " Camera Z: " + newZ;

}*/

function init2D ()
{
    var w = container2d.clientWidth;
    var h = container2d.clientHeight;
    var viewSize = .1*h; //this one is questionable, and depends upon what's being modelled.
    var aspectRatio = w / h;
    var left = (-aspectRatio*viewSize)/2;
    var right = -left;
    var top = viewSize/2;
    var bot = -top;
    var near = 1;
    var far = 50;

    scene2d = new THREE.Scene();
    //param(left pane, right pane, top pane, bottom pane, near, far) NOTE: Objects farther than 'far' or nearer than 'near' won't be rendered.
    camera2d = new THREE.OrthographicCamera(left, right, top, bot, near, far);
    camera2d.position.set(0,0,50);

    let ambientLight2d = new THREE.AmbientLight("#ffffff", 1);
    ambientLight2d.position.set(0, 20, 20);
    scene2d.add(ambientLight2d);

    renderer2d = new THREE.WebGLRenderer(
        {
            canvas: container2d,
            antialias: true,
            alpha: true
        });
    renderer2d.setSize(container2d.clientWidth, container2d.clientHeight);
    renderer2d.setPixelRatio(window.devicePixelRatio);

    //don't need this if we're passing the component in above.  Add if we ever want to change that.
    //container2d.appendChild( renderer2d.domElement );

    //change filename/path from 'building.gltf' to whatever here.  Can also load a .glb w/ no performance changes
    const gtlfLoader2d = new GLTFLoader();
    gtlfLoader2d.load( 'building.gltf', function ( gltf ) {

        scene2d.add( gltf.scene );

    }, undefined, function ( error ) {

        console.error( error );

    } );

    twoDInit = true;
}

function addScene2d(){

    init2D();
    document.getElementById("alarmButton2d").style.opacity = 1;
    document.getElementById("resetButton2d").style.opacity = 1;
    function animate() {
        requestAnimationFrame( animate );
        renderer2d.render( scene2d, camera2d );
        renderAlarms2d();
    }
    animate();

}

function addAlarms2d()
{
    alarmsTriggered2d = true;

    sphereDoor.visible = true;
    sphereWinLow.visible = true;
    sphereWinUp.visible = true;
    lightDoor.visible = true;
    lightWinLower.visible = true;
    lightWinUpper.visible = true;

    sphereDoor.opacity = 1;
    sphereWinLow.opacity = 1;
    sphereWinUp.opacity = 1;
    lightDoor.intensity = 10;
    lightWinLower.intensity = 10;
    lightWinUpper.intensity = 10;

    //need to play around with where the imported mesh settles in the frame to see where these go.
    sphereDoor.position.set(0, -3, 14);
    lightDoor.position.set(0, -3, 14);

    sphereWinLow.position.set(-11.5, -3, 14);
    lightWinLower.position.set(-11.5, -3, 14);

    sphereWinUp.position.set(7.5, 1.5, 14);
    lightWinUpper.position.set(7.5, 1.5, 14);

    scene2d.add(lightDoor);
    scene2d.add(lightWinLower);
    scene2d.add(lightWinUpper);
    scene2d.add(sphereDoor);
    scene2d.add(sphereWinLow);
    scene2d.add(sphereWinUp);

    document.getElementById("eventViewer2d").innerText+= "Alarms triggered at: "+ Date() + "\n\n";
}

function resetAlarms2d()
{
    alarmsTriggered2d = false;
    sphereDoor.visible = false;
    sphereWinLow.visible = false;
    sphereWinUp.visible = false;
    lightDoor.visible = false;
    lightWinLower.visible = false;
    lightWinUpper.visible = false;

    document.getElementById("eventViewer2d").innerText+= "Alarms cleared at: "+ Date() + "\n\n";
}

function renderAlarms2d() {

    var deltaTime2d = clock2d.getDelta();
    var blink = Math.floor(time2d) & 3;
    if(alarmsTriggered2d)
    {
        if(previousFrameBlinked2d !== blink)
        {
            //sphereWinLow.rotation.x += 0.01;
            //sphereWinLow.rotation.y += 0.01;
                sphereDoor.opacity = 1;
                sphereWinLow.opacity = 1;
                sphereWinUp.opacity = 1;
                lightDoor.intensity = 10;
                lightWinLower.intensity = 10;
                lightWinUpper.intensity = 10;

        }
        else
        {
            sphereDoor.opacity = .5;
            sphereWinLow.opacity = .5;
            sphereWinUp.opacity = .5;
            lightDoor.intensity = 1;
            lightWinLower.intensity = 1;
            lightWinUpper.intensity = 1;
        }
        previousFrameBlinked2d = blink;
        time2d+=deltaTime2d;
    } 

}

function init3D ()
{
    var w = container3d.clientWidth;
    var h = container3d.clientHeight;
    var fov = 60; 
    var aspectRatio = w / h;
    var near = 1;
    var far = 1000;

    scene3d = new THREE.Scene();
    scene3d.traverse( disposeMaterial );
    scene3d.children.length = 0;
    
    //param(FOV in degrees,aspect ratio, near clipping, far clipping) NOTE: Objects farther than 'far' or nearer than 'near' won't be rendered.
    camera3d = new THREE.PerspectiveCamera(fov, aspectRatio, near, far);

    camera3d.position.set(80,50,80);
    //camera3d.rotation.z = Math.PI *0.5;

    let ambientLight3d = new THREE.PointLight("#ffffff", 1,0,5);
    ambientLight3d.position.set(-80, 30, -80);
    scene3d.add(ambientLight3d);
    camera3d.lookAt(ambientLight3d.position);

    renderer3d = new THREE.WebGLRenderer(
        {
            canvas: container3d,
            antialias: true,
            alpha: true
        });
    renderer3d.setSize( container3d.clientWidth, container3d.clientHeight);
    renderer3d.setPixelRatio(window.devicePixelRatio);
    renderer3d.gammaFactor = 1.7;

    const renderScene = new RenderPass( scene3d, camera3d );
    renderScene.clearColor = new THREE.Color( 0, 0, 0 );
    renderScene.clearAlpha = 0;

    const bloomPass = new UnrealBloomPass( new THREE.Vector2( container3d.innerWidth, container3d.innerHeight ), 1.5, 0.4, 0.85 );
    bloomPass.threshold = params.threshold;
    bloomPass.strength = params.strength;
    bloomPass.radius = params.radius;

    bloomComposer = new EffectComposer( renderer3d );
    bloomComposer.renderToScreen = false;
    bloomComposer.addPass( renderScene );
    bloomComposer.addPass( bloomPass );

    const mixPass = new ShaderPass(
        new THREE.ShaderMaterial( {
            uniforms: {
                baseTexture: { value: null },
                bloomTexture: { value: bloomComposer.renderTarget2.texture }
            },
            vertexShader: document.getElementById( 'vertexshader' ).textContent,
            fragmentShader: document.getElementById( 'fragmentshader' ).textContent,
            defines: {}
        } ), 'baseTexture'
    );

    mixPass.needsSwap = true;

    const fxaaPass = new ShaderPass( FXAAShader );

    //undecided which one of these I like better.  Both are tone correction.  Using Reinhard for now.
    const colorCorrectionPass = new ShaderPass( ColorCorrectionShader );
    const outputPass = new OutputPass( THREE.ReinhardToneMapping );

    const pixelRatio = renderer3d.getPixelRatio();

    fxaaPass.material.uniforms[ 'resolution' ].value.x = 1 / ( container3d.offsetWidth * pixelRatio );
    fxaaPass.material.uniforms[ 'resolution' ].value.y = 1 / ( container3d.offsetHeight * pixelRatio );

    finalComposer = new EffectComposer( renderer3d );
    finalComposer.addPass( renderScene );
    finalComposer.addPass( mixPass );
    //alt for output/Reinhard pass
    //finalComposer.addPass( colorCorrectionPass );
    finalComposer.addPass( outputPass );
    finalComposer.addPass( fxaaPass );

    //Comment this line out for a static view.
    const controls3d = new OrbitControls( camera3d, renderer3d.domElement );

    var gltfPosition = new THREE.Vector3();

    //change your filename/path from 'multibuilding.gltf' to whatever here.  Can also load a .glb w/ no performance changes
    const gltfLoader3d = new GLTFLoader();
    gltfLoader3d.load( 'multibuilding.gltf', function ( gltf ) {

        scene3d.add( gltf.scene );
        gltfPosition = gltf.scene.position.set(-150,-65,0);
        //gtlf.scene.layers.disable( BLOOM_SCENE );


    }, undefined, function ( error ) {

        console.error( error );

    } );

    controls3d.target.copy(gltfPosition);
    controls3d.update();
    threeDInit = true;

}

function addScene3d(){

    //document.style.cursor = progress;
    init3D();
    document.getElementById("alarmButton3d").style.opacity = 1;
    document.getElementById("resetButton3d").style.opacity = 1;
    function animate() {
        requestAnimationFrame( animate );
        //getCameraPos();
        //document.getElementById("Camera_X").innertext = clock3d.getElapsedTime();
        //renderer3d.render( scene3d, camera3d );
        render();
        if(alarmsTriggered3d)
            renderAlarms3d();
    }
    animate();

}

function addAlarms3d()
{
    alarmsTriggered3d = true;

    sphereb1.visible = false;
    sphereb2.visible = false;
    sphereb3.visible = false;
    sphereb4.visible = false;

    lightb1.intensity = 0;
    lightb2.intensity = 0;
    lightb3.intensity = 0;
    lightb4.intensity = 0;

    cyl1.visible = false;
    cyl2.visible = false;
    cyl3.visible = false;
    cyl4.visible = false;

    spotlightb1.intensity = 0;
    spotlightb2.intensity = 0;
    spotlightb3.intensity = 0;
    spotlightb4.intensity = 0;
    
    //whenever you import a new mesh, you'll need to play around with where the imported mesh settles in the frame to see where these go.
    //if you're curious about directions, you ref my xyz picture
    //orrrrr you could do some trial and error on your own by setting the opacity and intensity of the lights high, then swivelling the camera.  Up to you!

    /*
        the OG positions for small lights right above the buildings.  I hate keeping legacy code for posterity, 
        but I'm breaking my own rules here so we have some approximation for the tops of these buildings. 
        Subject to change as the mesh changes, obvi.

    //far uni building
    sphereb1.position.set(-60, -32, -110);
    lightb1.position.set(-60, -32, -110);

    //tall black building
    sphereb2.position.set(-125, 16, -28);
    lightb2.position.set(-125, 16, -28);

    //close small building
    sphereb3.position.set(-45, -50, -20);
    lightb3.position.set(-45, -50, -20);

    //small building behind tall building
    sphereb4.position.set(-120, -50, -90);
    lightb4.position.set(-120, -50, -90);

    */

    //far uni building
    sphereb1.position.set(-60, 21, -110);
    lightb1.position.set(-60, 21, -110);
    spotlightb1.position.set(-60, 23, -110);
    cyl1.position.set(-60, -5, -110);

    //tall black building
    sphereb2.position.set(-125, 36, -28);
    lightb2.position.set(-125, 36, -28);
    spotlightb2.position.set(-125, 38, -28);
    cyl2.position.set(-125, 10, -28);

    //close small building
    sphereb3.position.set(-45, -8, -20);
    lightb3.position.set(-45, -8, -20);
    spotlightb3.position.set(-45, -3, -20);
    cyl3.position.set(-45, -32, -20);

    //small building behind tall building
    sphereb4.position.set(-130, -6, -90);
    lightb4.position.set(-130, -6, -90);
    spotlightb4.position.set(-130, -4, -90);
    cyl4.position.set(-130, -32, -90);

    scene3d.add(lightb1);
    scene3d.add(lightb2);
    scene3d.add(lightb3);
    scene3d.add(lightb4);
    
    scene3d.add(sphereb1);
    scene3d.add(sphereb2);
    scene3d.add(sphereb3);
    scene3d.add(sphereb4);

    scene3d.add(spotlightb1);
    scene3d.add(spotlightb2);
    scene3d.add(spotlightb3);
    scene3d.add(spotlightb4);

    scene3d.add(cyl1);
    scene3d.add(cyl2);
    scene3d.add(cyl3);
    scene3d.add(cyl4);

    //light over building 3 doesn't properly illuminate other buildings, so targeting it at the centre of the scene
    spotlightb3.target.position.set(-80, -20, -80);
    scene3d.add(spotlightb3.target);

    
    //needed if you substantially change components, sometimes helps with lighting issues on lights reload.  
    //Keeping in so we don't have to dumpster dive the web if we need it
    /*
    for(var i in scene.children)
    {
        if(scene.children[i].material)
            scene.children[i].material.needsupdate = true;
    }
    */

    document.getElementById("eventViewer3d").innerText+= "Alarms triggered at: "+ Date() + "\n\n";
}

function resetAlarms3d()
{
    alarmsTriggered3d = false;

    sphereb1.visible = false;
    sphereb2.visible = false;
    sphereb3.visible = false;
    sphereb4.visible = false;

    lightb1.visible = false;
    lightb2.visible = false;
    lightb3.visible = false;
    lightb4.visible = false;

    cyl1.visible = false;
    cyl2.visible = false;
    cyl3.visible = false;
    cyl4.visible = false;

    spotlightb1.visible = false;
    spotlightb2.visible = false;
    spotlightb3.visible = false;
    spotlightb4.visible = false;

    document.getElementById("eventViewer3d").innerText+= "Alarms cleared at: "+ Date() + "\n\n";
}

/*
    this needs some cleanup.  
    originally was just setting light intensity and not the visible property, 
    but I think the visible property works better/provides greater code clarity.
*/
function renderAlarms3d(blink) {

    var deltaTime3d = clock3d.getDelta();
    //change the constant for faster or slower blinkage (definitely not a real word)
    var blink = Math.floor(time3d) & 50; 
    var light = getRandomLight(4);
    var randColor = getRandomColor();

    //document.getElementById("alarm_helper").innerText = "alarmsTriggered:" + alarmsTriggered3d + "blink: " + blink;

    if(previousFrameBlinked3d !==blink)
    {
        //document.getElementById("alarm_helper").innerText = "alarmsTriggered:" + alarmsTriggered3d + "light: " + light;

        switch(light)
        {
            case 1:
                sphereb1.visible = true;
                sphereb1.material.color.setHex(randColor);

                cyl1.visible = true;
                cyl1.material.color.setHex(randColor);

                lightb1.visible = true;
                lightb1.intensity = 100;
                lightb1.color.setHex(randColor);

                spotlightb1.visible = true;
                spotlightb1.intensity = 1.5;
                spotlightb1.color.setHex(randColor);
                
                sphereb1.layers.enable( BLOOM_SCENE );
                lightb1.layers.enable( BLOOM_SCENE );
                cyl1.layers.enable( BLOOM_SCENE );
                spotlightb1.layers.enable( BLOOM_SCENE );
                //object.layers.toggle( BLOOM_SCENE );

                sphereb2.visible = false;
                sphereb3.visible = false;
                sphereb4.visible = false;

                cyl2.visible = false;
                cyl3.visible = false;
                cyl4.visible = false;

                lightb2.intensity = 0;
                lightb3.intensity = 0;
                lightb4.intensity = 0;

                spotlightb2.intensity = 0;
                spotlightb3.intensity = 0;
                spotlightb4.intensity = 0;

                //document.getElementById("Camera_X").innerText = "case 1, color: "+ randColor;
                render();
                break;
            case 2:
                sphereb2.visible = true;
                sphereb2.material.color.setHex(randColor);

                cyl2.visible = true;
                cyl2.material.color.setHex(randColor); 

                lightb2.visible = true;
                lightb2.intensity = 100;
                lightb2.color.setHex(randColor);

                spotlightb2.visible = true;
                spotlightb2.intensity = 1.5;
                spotlightb2.color.setHex(randColor);

                sphereb2.layers.enable( BLOOM_SCENE );
                lightb2.layers.enable( BLOOM_SCENE );
                cyl2.layers.enable( BLOOM_SCENE );
                spotlightb2.layers.enable( BLOOM_SCENE );

                sphereb1.visible = false;
                sphereb3.visible = false;
                sphereb4.visible = false;

                cyl1.visible = false;
                cyl3.visible = false;
                cyl4.visible = false;

                lightb1.intensity = 0;
                lightb3.intensity = 0;
                lightb4.intensity = 0;

                spotlightb1.intensity = 0;
                spotlightb3.intensity = 0;
                spotlightb4.intensity = 0;

                //document.getElementById("Camera_X").innerText = "case 2, color: "+ randColor;
                break;
            case 3:
                sphereb3.visible = true;
                sphereb3.material.color.setHex(randColor);

                cyl3.visible = true;
                cyl3.material.color.setHex(randColor);

                lightb3.visible = true;
                lightb3.intensity = 100;
                lightb3.color.setHex(randColor);

                spotlightb3.visible = true;
                spotlightb3.intensity = 1.5;
                spotlightb3.color.setHex(randColor);

                sphereb3.layers.enable( BLOOM_SCENE );
                lightb3.layers.enable( BLOOM_SCENE );
                cyl3.layers.enable( BLOOM_SCENE );
                spotlightb3.layers.enable( BLOOM_SCENE );

                sphereb1.visible = false;
                sphereb2.visible = false;
                sphereb4.visible = false;

                cyl1.visible = false;
                cyl2.visible = false;
                cyl4.visible = false;

                lightb1.intensity = 0;
                lightb2.intensity = 0;
                lightb4.intensity = 0;

                spotlightb1.intensity = 0;
                spotlightb2.intensity = 0;
                spotlightb4.intensity = 0;

                //document.getElementById("Camera_X").innerText = "case 3, color: "+ randColor;
                break;
            case 4:
                sphereb4.visible = true;
                sphereb4.material.color.setHex(randColor);

                cyl4.visible = true;
                cyl4.material.color.setHex(randColor);

                lightb4.visible = true;
                lightb4.intensity = 100;
                lightb4.color.setHex(randColor);

                spotlightb4.visible = true;
                spotlightb4.intensity = 1.5;
                spotlightb4.color.setHex(randColor);

                sphereb4.layers.enable( BLOOM_SCENE );
                lightb4.layers.enable( BLOOM_SCENE );
                cyl4.layers.enable( BLOOM_SCENE );
                spotlightb4.layers.enable( BLOOM_SCENE );

                sphereb1.visible = false;
                sphereb2.visible = false;
                sphereb3.visible = false;

                cyl1.visible = false;
                cyl2.visible = false;
                cyl3.visible = false;

                lightb1.intensity = 0;
                lightb2.intensity = 0;
                lightb3.intensity = 0;

                spotlightb1.intensity = 0;
                spotlightb2.intensity = 0;
                spotlightb3.intensity = 0;

                //document.getElementById("Camera_X").innerText = "case 4, color: "+ randColor;
                break;
            default:
                sphereb1.visible = false;
                sphereb2.visible = false;
                sphereb3.visible = false;
                sphereb4.visible = false;

                cyl1.visible = false;
                cyl2.visible = false;
                cyl3.visible = false;
                cyl4.visible = false;

                lightb1.intensity = 0;
                lightb2.intensity = 0;
                lightb3.intensity = 0;
                lightb4.intensity = 0;

                spotlightb1.intensity = 0;
                spotlightb2.intensity = 0;
                spotlightb3.intensity = 0;
                spotlightb4.intensity = 0;

                //document.getElementById("Camera_X").innerText = "case default";
                //I know I don't need this on the last statement in js, but consider it a force of habit haha
                break;
        }
 
    }
        
    previousFrameBlinked3d = blink;
    time3d+=deltaTime3d;  
}

function getRandomLight(numLights)
{
    return Math.floor(Math.random() *numLights) + 1;
}

function getRandomColor()
{
    var numColor = Math.floor(Math.random() * 3) + 1;
    var colorString;
    switch(numColor)
    {
        case 1:
            //light blue from site, subbed out for a tint with more colour pop
            //colorString = 0x045c85;
            colorString = 0x68BDF7;
            break;
        case 2:
            //purple from site, subbed out for a purple with upped magenta for more colour pop
            //colorString = 0x4a2347;
            colorString = 0x7638B4;
            break;
        case 3:
            //red
            colorString = 0xD21425;
            break;
        default:
            colorString = 0xffffff;
            break;
    }
    return colorString;
}

//scenes, like onions and ogres, have layers.  bloom is in the middle, fxaa top, more info attached to finalComposer above
//note that fxaa needs tweaking; scene's still a bit wonky on the diagonals
function render() {

    scene3d.traverse( darkenNonBloomed );
    bloomComposer.render();
    scene3d.traverse( restoreMaterial );
    finalComposer.render();

}

//next three methods prevent bloom from applying to everything and assaulting your eyeballs.  Take them out at your own peril
function darkenNonBloomed( obj ) {

    if ( obj.isMesh && bloomLayer.test( obj.layers ) === false ) {

        materials[ obj.uuid ] = obj.material;
        obj.material = darkMaterial;

    }

}

function restoreMaterial( obj ) {

    if ( materials[ obj.uuid ] ) {

        obj.material = materials[ obj.uuid ];
        delete materials[ obj.uuid ];

    }

}

function disposeMaterial( obj ) {

    if ( obj.material ) {

        obj.material.dispose();

    }

}


