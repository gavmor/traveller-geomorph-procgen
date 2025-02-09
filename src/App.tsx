import {h} from "preact"
import "./app.css"
import {Canvas} from "@react-three/fiber"
import {OrbitControls} from "@react-three/drei"

export function App() {
    return (
        <Canvas>
            <OrbitControls />
            <mesh>
                <boxGeometry />
                <meshNormalMaterial />
            </mesh>
        </Canvas>
    )

}
