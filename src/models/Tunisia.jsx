import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import scene from '../assets/3d/tunisia.glb';

const Tunisia = ({ currentAnimation, ...props }) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(scene);
  console.log("Current Animation:", currentAnimation);

  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    Object.values(actions).forEach((action) => action.stop());
    if (actions[currentAnimation]) {
      console.log(`Playing animation: ${currentAnimation}`);
      actions[currentAnimation].play();
    } else {
      console.warn(`Animation not found: ${currentAnimation}`);
    }
  }, [actions, currentAnimation]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Sketchfab_model_0" rotation={[-Math.PI / 2, 0, 0]}>
                <group name="root_1">
                  <group
                    name="GLTF_SceneRootNode_2"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group
                      name="RootNode_(gltf_orientation_matrix)_0_3"
                      rotation={[-Math.PI / 2, 0, 0]}
                    >
                      <group name="RootNode_(model_correction_matrix)_1_4">
                        <group name="root_2_5">
                          <group
                            name="GLTF_SceneRootNode_3_6"
                            rotation={[Math.PI / 2, 0, 0]}
                          >
                            <group name="Flag_ShapeKeys_2_4_7">
                              <group name="mesh_0_5_8">
                                <group name="mesh_0_9">
                                  <mesh
                                    name="mesh_0"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.mesh_0.geometry}
                                    material={materials.Flag}
                                    morphTargetDictionary={nodes.mesh_0.morphTargetDictionary}
                                    morphTargetInfluences={nodes.mesh_0.morphTargetInfluences}
                                  />
                                </group>
                              </group>
                            </group>
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

export default Tunisia;
