import unsplash from "../../assets/images/unsplash_project.png";
import comfy from "../../assets/images/comfy_project.png";
import magnus from "../../assets/images/magnus_project.png";
import petLovers from "../../assets/images/petlovers.png";
import jobster from "../../assets/images/Jobster.png";
import backroads from "../../assets/images/backroads.png";

const unsplashUrl = "https://search-images-app-unsplash.netlify.app";
const magnusUrl = "https://loja-magnus.netlify.app";
const comfyUrl = "https://comfysloth-project.netlify.app";
const petLoversUrl = "https://petloverswebsite.netlify.app";
const jobsterUrl = "https://jobster-ts.netlify.app/";
const backroadsurl = "https://backroadsapp-gui.netlify.app";

const unsplashRepo =
  "https://github.com/GuilhermeEstevan/React---Search-Images";
const magnusRepo = "https://github.com/GuilhermeEstevan/Loja-Magnus";
const comfyRepo = "https://github.com/GuilhermeEstevan/comfy-sloth-TS";
const petLoversRepo = "https://github.com/GuilhermeEstevan/PetLovers";
const jobsterRepo = "https://github.com/GuilhermeEstevan/Jobster";
const backroadsRepo = "https://github.com/GuilhermeEstevan/temp-backrodas-app";

export const projectsData = {
  projects: [
    {
      id: 1,
      name: "Unsplash",
      imageUrl: unsplash,
      url: unsplashUrl,
      repository: unsplashRepo,
    },
    {
      id: 2,
      name: "Loja Magnus",
      imageUrl: magnus,
      url: magnusUrl,
      repository: magnusRepo,
    },
    {
      id: 3,
      name: "Comfy Sloth",
      imageUrl: comfy,
      url: comfyUrl,
      repository: comfyRepo,
    },
    {
      id: 4,
      name: "Pet Lovers",
      imageUrl: petLovers,
      url: petLoversUrl,
      repository: petLoversRepo,
    },
    {
      id: 5,
      name: "Jobster",
      imageUrl: jobster,
      url: jobsterUrl,
      repository: jobsterRepo,
    },
    {
      id: 6,
      name: "Backroads App",
      imageUrl: backroads,
      url: backroadsurl,
      repository: backroadsRepo,
    },
  ],
};
