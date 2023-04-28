import axios from "axios";
import { VercelDeploymentType } from "../types";

const deletePrevVercelBuilds = async (builds: VercelDeploymentType[]) => {
  if (builds.length > 2) {
    const deploymentsToDelete = builds.slice(2);
    for (let i = 0; i < deploymentsToDelete.length; i++) {
      console.info("deleting previous deployment", deploymentsToDelete[i]);
      await axios({
        headers: {
          Authorization: `Bearer ${process.env.VERCEL_TOKEN}`,
        },
        method: "DELETE",
        url: `https://api.vercel.com/v13/deployments/${deploymentsToDelete[i].uid}`,
      });
    }
  }
};

export default deletePrevVercelBuilds;
