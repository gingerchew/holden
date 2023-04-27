import { Handlers, PageProps } from "$fresh/server.ts";

const getDimensions = (v:string) => {
  
  return v.indexOf('x') > 0 ? v.split('x').map(v => +v) : [+v, +v];
}

const Image = ({ x, y }: {x:number; y:number;}) => {
  const textStyles = 'font-family: sans-serif;font-size: clamp(10px, 10cqi, 48px);';
  const svgStyles = 'background-color: #edeff1;container-type: inline-size;'
  const label = (x < 20 || y < 20) ? 'x' : x+'x'+y
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${x}" height="${y}" style="${svgStyles}">
    <text text-anchor="middle" x="${x / 2}" y="${y / 2}" style="${textStyles}">${label}</text>
  </svg>`
}

export const handler: Handlers<string | null> = {
  GET(_, ctx) {
    const [x, y] = getDimensions(ctx.params.dimensions);
    const output = Image({ x, y })
    if (!ctx.params.dimensions.match(/\d*?x\d*?/)) return ctx.render();
    
    return new Response(output, {
      headers: { 'Content-Type': 'image/svg+xml' }
    })
  },
};

export default function ImageWrapper(props: PageProps) {
  const [x, y] = getDimensions(props.params.dimensions);

  return (
    <div>
      <h1>Wait a second... What are you doing here??</h1>
      <p>You probably want to just add the url to an img tag, but that's just me.</p>
      
    </div>
  )
}