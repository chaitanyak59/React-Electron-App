import { execSync } from 'child_process';

const rootDir = __dirname;

const copyProdDependencies = () => {
 const resources = [
    `${rootDir}/build`
 ];

 const appPath = `${rootDir}/electron/prod`;
 const reactUIDestPath = `${appPath}/react`;

 execSync(`mkdir -p ${reactUIPath}`);
 for(path of resources) {
    execSync(`cp -r ${path}/* ${reactUIDestPath}`);
 }
 return;
}

copyProdDependencies();