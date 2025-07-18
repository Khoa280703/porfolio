// src/components/ModelViewer.jsx
import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';

// Component này bây giờ sẽ chịu trách nhiệm tải model và chạy animation
function LaptopModel() {
    const group = useRef();

    // 1. Dùng hook useGLTF để tải model. Nó trả về scene và mảng animations.
    //    Hãy thay thế đường dẫn đến file .glb của bạn ở đây.
    const { scene, animations } = useGLTF('/gaming_laptop.glb');

    // 2. Dùng hook useAnimations, truyền vào mảng animations đã tải và ref
    const { actions } = useAnimations(animations, group);

    // 3. Kích hoạt animation bạn muốn
    useEffect(() => {
        // console.log(actions); // Dùng dòng này để xem tất cả các tên animation có sẵn
        if (actions['Take 001']) { // Thay 'Take 001' bằng tên animation của laptop
            actions['Take 001'].play();
        }
    }, [actions]);

    // 4. Dùng thẻ <primitive> để render toàn bộ scene đã được tải
    //    Đồng thời gán ref `group` vào đây
    return <primitive ref={group} object={scene} scale={1.5} position={[0, -1, 0]} rotation={[0, 4.6, 0]} />;
}


// Component "sân khấu" chính
export default function ModelViewer() {
    return (
        <div className="w-full h-full min-h-[400px] lg:min-h-[600px]"> {/* Fill full height of parent */}
            <Canvas
                camera={{ position: [0, 2, 10], fov: 55 }}
                style={{ width: '100%', height: '100%' }} // Make Canvas fill the container
            >
                <Suspense fallback={null}>
                    <ambientLight intensity={1.5} />
                    <directionalLight position={[1, 1, 1]} intensity={3} />

                    {/* Sử dụng component LaptopModel đã được sửa */}
                    <LaptopModel />

                </Suspense>
                <OrbitControls
                    enableZoom={true}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={0.5}
                />
            </Canvas>
        </div>
    );
}
useGLTF.preload('/Gaming_laptop.glb');