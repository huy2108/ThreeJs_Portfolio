import React, { useRef } from 'react'
import { Float, useGLTF } from '@react-three/drei'

const ReactLogo = (props) => {
    const { nodes, materials } = useGLTF('/models/react.glb')

    const test = useGLTF('/models/react.glb')

    // console.log(test)

    return (
        <Float floatIntensity={1} dispose={null}>
            <group {...props} scale={0.5}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['React-Logo_Material002_0'].geometry}
                    material={materials['Material.002']}
                    position={[0, 0.07935, 0.18102]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={0.39}
                />
            </group>
        </Float>
    )
}

useGLTF.preload('/models/react.glb')

export default ReactLogo;