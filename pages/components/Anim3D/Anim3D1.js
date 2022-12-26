import React, { useRef, Suspense, useEffect  } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { ScrollControls, Scroll, useScroll } from '@react-three/drei';

function Anim3D1(props) {

    return (

        <div className='h-screen opacity-10 w-full block fixed z-40' style={{overflow: 'hidden', display: 'block'}}>
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <ScrollControls
                    pages={1} // Each page takes 100% of the height of the canvas
                    distance={0.1} // A factor that increases scroll bar travel (default: 1)
                    damping={0.1} // Friction, higher is faster (default: 4)
                    horizontal={false} // Can also scroll horizontally (default: false) - Allow movement at the sametime as scrolling the page
                    infinite={false} // Can also scroll infinitely (default: false)
                >
                    <Scroll>
                        <Scene position={[0, 0, 0]} />
                    </Scroll>
                </ScrollControls>

            </Canvas>
        </div>
    );
}

function Scene(props) {
    const comicImg = useLoader(GLTFLoader, '/opened_comics_book/scene.gltf');

    const ref = useRef()
    const data = useScroll()
    useFrame(() => {
        // data.offset = current scroll position, between 0 and 1, dampened
        // data.delta = current delta, between 0 and 1, dampened

        // Will be 0 when the scrollbar is at the starting position,
        // then increase to 1 until 1 / 3 of the scroll distance is reached
        const a = data.range(0, 1 / 3);
        // const b = data.curve(0, 1 / 2);
        // const c = data.curve(0, 1);

        ref.current.rotation.x = a;
        // ref.current.rotation.y = b;
        // ref.current.rotation.z = c;

    });

    useEffect(()=>{console.log(data)},[data])

    return (
        <Suspense>

            <primitive ref={ref} {...props} object={comicImg.scene} position={[0, 1, 1]} scale={0.1} />

        </Suspense >
    )
}

export default Anim3D1;