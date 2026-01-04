# speedcubing.org.nz
## Prerequisites
You will need the following:
- [Git](https://git-scm.com/install/)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) (installed via [Node.js](https://nodejs.org/en/download))

## Running the app locally
Follow these steps to run the app on your machine:
1. Clone the repo and navigate to it:
```bash
git clone https://github.com/speedcubingnz2025/speedcubing.org.nz && cd speedcubing.org.nz
```

2. Install the dependencies:
```bash
npm install
```
We use npm, but equivalent commands using `pnpm` or `yarn` will work. 

3. To start the dev server and open the app on [localhost:5173](http://localhost:5173), run:
```bash
npm run dev
```

Alternatively, build a production version of your app (available on [localhost:4173](http://localhost:4173/)) with:
```bash
npm run build
```

You can view the production version with:
```bash
npm run preview
```