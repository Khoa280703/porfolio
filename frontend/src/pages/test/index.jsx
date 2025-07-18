import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, ScrollControls, useScroll } from '@react-three/drei';

// Simple rotating model without scroll dependency
function SimpleRotatingModel() {
    const modelRef = useRef();

    useFrame((state) => {
        if (modelRef.current) {
            modelRef.current.rotation.y = state.clock.elapsedTime * 0.5;
            modelRef.current.rotation.x = state.clock.elapsedTime * 0.3;
        }
    });

    return (
        <mesh ref={modelRef} scale={1.5}>
            <icosahedronGeometry args={[1, 1]} />
            <meshBasicMaterial color="#8A2BE2" wireframe />
        </mesh>
    );
}

// Your original model with scroll controls
function ScrollBasedModel() {
    const modelRef = useRef();
    const scroll = useScroll();

    useFrame(() => {
        if (modelRef.current && scroll) {
            modelRef.current.rotation.y = scroll.offset * Math.PI * 4;
            modelRef.current.rotation.x = scroll.offset * Math.PI * 2;
        }
    });

    return (
        <mesh ref={modelRef} scale={1.5} position={[0, 0, 0]}>
            <icosahedronGeometry args={[1, 1]} />
            <meshBasicMaterial color="#ff6b6b" wireframe />
        </mesh>
    );
}

const Test = () => {
    return (

        <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.6} />

            {/* Simple rotating model - should always work */}
            <SimpleRotatingModel />

            {/* Stars outside of ScrollControls */}
            <Suspense fallback={null}>
                <Stars
                    radius={50}
                    depth={30}
                    count={2000}
                    factor={3}
                    saturation={0}
                    fade
                    speed={1}
                />
            </Suspense>

            {/* ScrollControls with your original model */}
            <ScrollControls pages={8} damping={0.1}>
                <Suspense fallback={null}>
                    <ScrollBasedModel />
                </Suspense>
            </ScrollControls>
        </Canvas>
    );
};

export default Test;