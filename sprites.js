// Faithful, deterministic palette sprites based on user-supplied pixel maps.
// Row lengths intentionally vary; out-of-range cells are transparent.
const SPRITE_PALETTE = {
  K:'#23201E',A:'#FCEDD4',B:'#F9CFC4',C:'#FBDA67',D:'#DDAFFF',
  E:'#93FACD',F:'#ABBAE6',G:'#68D2A8',H:'#6CC6F5',I:'#F2ABC3',
  J:'#FCA8A0',L:'#8B95DF',M:'#4099B5',N:'#CC86AC',O:'#6C8BD0',
  P:'#8867B6',Q:'#2F5499'
};
const SPRITES = {
 rabbit:[
"..KKKKKKK.......................KK......",
"..KKKKKKK......................KKK......",
"KKDDDDDDKKK...................KKCCKK....",
"KKDDDDDDKKK...................KKCCKK....",
"KKDDDDDDDDKK...............KKKKKCCKKKKK.",
"KKDDDDDDDDKK..............BKKKKCCCKKKKKB",
"KKDDDDDDDDKK.............KKCCCCCCCCCCCKK",
"KKDDDDDDDDKK........KKKKKKKKCCCCCCCCCKKK",
"KKDDDDDDDDKK.......KKKKKKKKKKKCCCCCCKKK.",
"KKDDDDDDDDKK....KKKKQQQQQQQQKKCCCCCCKKK.",
"KKDDDDDDDDKK..KKKKKKQQQQQQQKKCCCCCCCCKK.",
"KKDDDDDDDDKK..KKQQQQQQQQQQKKKCCCKKCCCKK.",
"KKDDDDDDDDKKKKKKQQQQQQQQQQKKKCCKDKKKCKK.",
"KKNLDDDDDDKKKKKQQQQQQQQQQKKDKKKDDDKKK...",
"KKLLDDDDDDKKKKQQQQQQQQQQQKKDDKDDDDKKK...",
"KKLLDDDDDDKKQQQQQQQQQQQQQKKDDDDDDDKK....",
"KKKKLLDDDKKKQQQQQQQQQQQQQKKDDDDDDDKK....",
"..KKNLDDKKKQQQQQQQQQQQQQQQKKKDDDLLKK....",
"..KKNLLDKKQQQQQQQQQQQQQQQQKKKDNDKKKK....",
"..KKNLLLKKKQQQQQQQQQQQQQQQKKKDLLKK......",
"...KKKLLDDKKKKKKQQQQQQQQQQKKKKKK........",
"...FKKNDDDKKKKKKQQQQQQQQQQQQKKKK........",
"..KKDDDDDDDDDDDDKKKKKKQQQQQQKKK.........",
"..KKDDDDDDDDDDDDKKKKKKKKKKKKKKKK........",
"..KKDDDDDDDDDDDDDDDDDDKKKKKKKKKK........",
"..KKDDDDDDDDDDDDDDDDDDDDDDDDDDKK........",
"..KKDDDDDDDDDDDDDDDDDDDDDDDDDDKK........",
"..KKDDDDKKKKDDDDDDDDDKKKKDDDDDKK........",
"..KKDDDDKKKKDDDDDDDDDKKKKDDDDDKK........",
"KKDDDDDDKKKKDDDDDDDDDKKKKDDDDDDDKK......",
"KKDDDDDDDKKKDDDDDDDDDDKKKDDDDDDDKK......",
"KKDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDKK......",
"KKDDDDDDDDDDDDDDKDDDDDDDDDDDDDDDKK......",
"KKDDDDDDDDDDDDDDKKDDDDDDDDDDDDDDKK......",
"KKLLDDDDDDDDDDKKDDKDDDDDDDDDDDLLKK......",
"KKKNDDDDDDDDDDKKDDKDDDDDDDDDDDLLKK......",
"..KKNLDDDDDDDDDDDDDDDDDDDDDDLLKK........",
"..KKKKDDDDDDDDDDDDDDDDDDDDDDKKKK........",
"....KKLLLLDDDDDDDDDDDDDDDLLLKK..........",
"....KKKKKLLLDDDDDDDDDDLLDKKKKK..........",
".....KKKKKLLDDDDDDDDDLLLLKKKK...........",
"....KKDDDDDDDDDDDDDDDDDDDDDDKK..........",
"...AKKDDDDDDDDDDDDDDDDDDDDDDKK..........",
"..KKDDDDDLDDDDDDDDDDDDDLLDDDDDKK........",
"..KKDDDDLLDDDDDDDDDDDDDLLDDDDDKK........",
"..KKDDDLLLDDDDDDDDDDDDDNLLDDDDKK........",
"..KKDDDKLDDDDDDDDDDDDDDDDKDDDDKKKK......",
"..KKDDLKDDDDDDDDDDDDDDDDDKKDDDKKKK......",
"...KKKKDDDDDDDDDDDDDDDDDDDKKKKDDDKKK....",
"....KKKDDDDDDDDDDDDDDDDDDDKKKKDDDDKK....",
"....KKKDDDDDDDDDDDDDDDLDDDDDNLKKLLKK....",
".....KKDDDDDDDDDDDDDDLLDDDDDLLKKLLKK....",
"....KKKDDDDDDDDDDDDDLLLDDDDDNLKKNLKK....",
"...KKKKDDDLLLLLLLLLKKDDDDDDDLLKKLLKK....",
"...KKKKDDDLLLLLLLLLKKDDDDDDDLLKKNNKK....",
".KKDDDDDDLLLKKKKKKKDDDDDDLLLKKKKKK......",
".KKDDDDDDLLNKKKKKKKDDDDDDLLNKKKKKK......",
"...KKKKKKKKK.......KKKKKKKKKK...........",
"...KKKKKKKKK.......KKKKKKKKK............"
 ],
 squirrel:[
"..........................KK............",
".........................KKKK...........",
"........................KKHHKK..........",
".......................KKAHHHKK.........",
".......................KKFHHHKK.........",
"...................KKKKKHHHHHHKKKKK.....",
"..................KKKKKHHHHHHHHHHHKK....",
"..................KKHFFHHHHHHHHHHHKK....",
"..................KKHHHHHHHHHHHHHHKK....",
"...................KKHHHHHHHHHHHHKK.....",
"....................KKHHHHHHHHHHKK......",
".....................KHHHHHHHHHHK.......",
"....................KKHHHHHHHHHHKK......",
"...................BKHHHHHHHHHHHHKK.....",
"...................BKHHHHHHHHHHHHKK.....",
"...................BKHHKKKKKKKKHHKK.....",
".....................KKKKKHHKKKKK.......",
".....................KK.KKKKKK.KK.......",
".....KKK........KKK......KKKK...........",
"....KKKKK......KKKKK......KK............",
"....KKJJKK....KKJJJK......KK............",
"....KKJJKK....KKJJJK......KK............",
"....KKJJKKKKKKKKJJKK.....KKKKKKKKKK.....",
"....KKJJJJJJJJJJJJJK..KKKJKKJJJJJJKKK...",
"....KKJJJJJJJJJJJJJK..KKKJKKJJJJJJJKKK..",
"....KKJJJJJJJJJJJJNKKKKJJJKKJJJJJJJJJKK.",
"..BKJJJJJJJJJJJJJJJJKKJJJJKKJJJJJJJJJKK.",
".KKJJJJJJJJJJJJJJJJJKJJJJJKKJJJJJJJJJJKK",
".KKJJJJJJJJJJJJJJJJJKJJJJJKKJJJJJJJJJJJK",
".KKJJJJJJJJJJJJJJJJJKJJJJJKJJJBBBBJJJJJK",
".KKJJKKKJJJJJJJKKJJJKJJJJKJJJJBBBBBJJJJK",
"KKJBBKKKJJJJJJJKKBBBJKKJJKJJBBBBBBBBJJJK",
"KKBBBBBBBJJJJBBBBBBBBKKJJKBBBBBBNBBBBJJK",
"KKBBBBBBBBJKBBBBBBBBBKKJKKJBBBBJJJBBBJJK",
"KKBBBBBBBBKKBBBBBBBBBKKJKJJBBBNJJJJBBJJK",
"KKJBBBBBBBKBKBBBBBBBJKKKKJJBBJJJBBBBBJJK",
".KKJBBBBBBBBBBBBBBBJKJJJKJJBBJJJBBBBBJJK",
"..KKJJJJBBBBBBBJJKKKJJJJKJJBBJJJBBBBJKKB",
"...KKKJJBBBBBBBJJJKJJJJJKJJBBJJKJJJJJKK.",
"...KKKJJBBBBBBBJJJJJJJJKKKJJBJKKJJJJJKK.",
"..AKJJJBBBBBBBBJJJJJJJNKJKKJBJKKKKKKKK..",
".KKJJJNBBBBBBBBBJJJNKKKJJJKKJBKK........",
".KKJJNKBBBBBBBBBJJJJKJJJJJJJBBKK........",
".KKJKKJBBBBBBBBKJJJJJKJJJJJJBBKK........",
".KKJKKJBBBBBBBBKJJJJJKKJJJJJBBKK........",
"...KJJJBBBBBBKKJJJJJJKKJJJBBBKK.........",
"...KJJJBBBBBKKJJJJJJJKKJJBBBBKK.........",
"...KJJJJBBBBKKJJJJJJJKKJBBBBK...........",
"...KKKJJJJJJJKKJJJJJKBBBBKKKK...........",
"..KKKJJJJJKKKKJJJJJJKKKKKKKK............",
"..KKJJJJJKKKKKJJJJJNKKKKKK..............",
"...KKKKKKK...KKKKKKK...................."
 ],
 hedgehog:[
"...................KK...................",
"...................KK...................",
".........KKK.....KKMMKK.....KKK.........",
".........KKKK....KKMMKK.....KKK.........",
".........KKMKK...KKMMKK...KKMKK.........",
".........KKMMKKBKKMMMMKKKKKMMKK.........",
".........KKMMMKKKKMMMMMKKKKMMKK.........",
"...KKKKKKKKMMMMKKKMMMMMKKMMMQKKKKKKKK...",
"...KKKKKKKKQMMMMMMMMMMMMMMMMQKKKKKKKKK..",
"...KKKMMMMMQMMMMMMMMMMMMMMMMQMMMMQKKKK..",
"....KKQMMMMQMMMMMMMMMMMMMMMMQMMMMQKK....",
"....KKKKMMMMMMMMMMMMMMMMMMMMMMMMMKKK....",
".KKKKKKKQMMMMQQQMMMMMMMMQQQMMMMQQKKKKKK.",
".KKKKKKKQMMMMQQQMMMMMMMMQQQMMMMMQKKKKKKK",
"KKKQMMMMMMMQQAAAQQMMMMMQAAAQQMMMMMMMQKKK",
".KKQMMMMMMQQAAAAAQQMMQQAAAAAAQMMMMMMQQKK",
"..KKQMMMMMQQAAAAAAQMMQQAAAAAAQQMMMMQKK..",
"..KKKQQMMMAAAAAAAAAQQAAAAAAAAAMMMQQKKK..",
"..KKKQQMMMAAAAAAAAAQQAAAAAAAAAMMMMQKKKK.",
"..KKKMMMMMAAAAAAAAAAAAAAAAAAAAMMMMMKKKK.",
"KKMMMMMMMMAAAKKKAAAAAAAAKKKKAAMMMMMMMMKK",
"KKMMMMMMMMAAAKKKAAAAAAAAKKKKAAAMMMMMMMKK",
".KKQQMMQAAAAKKKKAAAAAAAAKKKKAAAAQQMQQKK.",
"..KKQMMQAAAAAAAAAAAAAAAAAAAAAAAAQQMQKKK.",
"...KKQQQAAAAAAAAAAAAAAAAAAAAAAAAQQQKKK..",
"..KKKQQMAAAAAAAAAAAKKAAAAAAAAAAAMMQKKKK.",
".KKKMMMMMABAAAAAAAKAKKAAAAAAAAAMMMMMMKK.",
"KKMMMMMMMMBBAAAAAAKAAKAAAAAAABMMMMMMMMKK",
"KKQQQQMMKKLKKAAAAAAAAAAAAAABBKKKMMQQQQKK",
"..KKKQQMKKKKKKAAAAAAAAAAAAAAAKKKMMQKKKK.",
"..KKKMMKKAKKLKKKAAAAAAAAAAAAAAAAKMMKKK..",
"...KKKKAAAAKKLLLKAAAAAAAAAAAAAAAAKKKKK..",
"..KKMKKAAAAKKLLLKKAAAAAAAAAAKKAAAKKMMKK.",
"KKMMKAAABBKKAKKLLLKAAAAAAAKKLKKBAAAKMMKK",
"KKMMKAAABKKAAAKKLLKKAAAAAAKKLLKKAAAKKMKK",
"KKKKKAABKKBBAAAKKKLKKAAAAKKLLLKKBBAKKKKK",
"KKKKKKKKKKAAAAAAKKLLLKKKKKLLLLLKKKKKKKKK",
"....KKKKKKAAAAAAAAKLLKKKKKLLLLLLKKKKK...",
"...KKKQQKKAAAAAAAAAKKKLLLLLLLLLLLLLKK...",
"...KKKQQKKAAAAAAAAAAAKPLLLLLLLLLLLLKK...",
"...KKKKKKKAAAAAAAAAAAAKKLLLLLLLLLLKK....",
"....KKKKKKBAAAAAAAAAAAAKKLLLLLLLKKK.....",
"........KKJBAAAAAAAAAAAKKLLLLLLLLKK.....",
"........KKBBJAAAAAAAAAKKLLLLLLLLLLK.....",
".........KKKJJJJJJBBJJKKPLLLKKLLLLK.....",
".........KKKJJJBBKBKKKKKPPKKJKKKPKK.....",
".........AKKJBJBKKKKKKKKKKBBBKKKKK......",
"..........KKKKKKKKKKKKKKKKKKKKKKKK......",
"...........KKKKK........KKKKK..........."
 ],
 otter:[
"..................KKKKKKKKKKK...........",
"................KKKKKKKKKKKKKKK.........",
"...............KKKKLLLLLLLLLLKKK........",
"..............KKLLLLLLLLLLLLLLLKK.......",
"............KKKLLLLLLLLLLLLLLLLLKK......",
"...........KKKLLLLLLLLLLLLLLLLLLLKK.....",
"..........KKLKLLKKKLLLLLLLLLLLLLLKKK....",
"..........KKKLLLKKKLLLLLLLKKKLLLLLLKK...",
"...........KKLLLLKKLLLLLLLKKKLLLLLOOK...",
"...........KKLLFFKCKKKKFFLKKKLLLLLOOK...",
"...........KKLFFKCACCKFFFFLLLLLLLLKK....",
"...........KKLFKKCCCCKFFFFFLLLLLLLKK....",
"...........KKKKCCACCCKFFFFFFLLLLLLKK....",
"..........KCCCCCCCCCCKKKKFFFFLLLLLKK....",
"........KKLKKCCCCCCCCCCCCKFLLLLLLOKK....",
".......KKKLLKKCCCCCCCKKKKKFLLLLLLOKK....",
".......KKLLLLKCCCCCCCKKKKKLLLLLLLKK.....",
".......KKLLLLKCCCCCKKLLLLLKLLLLLLKK.....",
"........KKOKKCCCCCCKKLLLLLLLLLLLLKK.....",
".KKKK..KKKKKCCCCCCCCKKLLLLLLLLLOOKK.....",
"KKKKKKKKLFKCCCCKKCCCCKKLLLLLLLLOKK......",
"KKLLKKKLLFKCCCKFFKCCCCKOOLLLLLLKK.......",
"KKLLLLKLLFFKKKFFFFKCCCKKKOLLLLOKKKKKKKK.",
"KKLLLLLLFFFFFFFFFKKKKKFFFLLLLLOKKKKLLLKK",
"KKLLLLLFFFFFFFFFKKKKKKFFLLLLLLOKKKLLLLKK",
"KKLLLLLFFFFFFFFKKLLLLKFLLLLLLLOKKLLLLLKK",
"KKLLLLOLFFFFFFFKKLLLLKLLLLLLLOKLLLLLLOKK",
"KKKLLOOLLFFFFFFKKLLLLKLLLLLLLOKLLLLLOKKK",
".KKOOOOLLLFFFFFKKLLLLLLLLLLLOOKLLLLOOKK.",
"...KKOOLLLLFFFFKKLLLLLLLLLOOKKLLLLOOKKK.",
"...KKKKLLLLLLLLKKLLLLLLLLLOOKKLOOOOKK...",
"....KKKKKLLLLLLKKLLLLLLOOOOKKOOOKKKKK...",
".......KKLLLLLLLKKLLLLOOOOOKOOOOKKKK....",
".........KKKLLLOOOOOOOOOOKKKKKKKK.......",
".........KKKKKKKKOOOOOKKKKKKKKKK........",
"............KKKKKOOOOOKKKK..............",
".................KKKKKK................."
 ]
};
function spriteInfo(name){const rows=SPRITES[name];return {rows,width:Math.max(...rows.map(r=>r.length)),height:rows.length};}
function drawSprite(ctx,name,px=5){
 const rows=SPRITES[name];if(!rows)return;
 const w=Math.max(...rows.map(r=>r.length));
 ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
 for(let y=0;y<rows.length;y++)for(let x=0;x<rows[y].length;x++){
  let color=SPRITE_PALETTE[rows[y][x]];
  if(!color)continue;
  ctx.fillStyle=color;ctx.fillRect(x*px,y*px,px,px);
 }
}


const FOOD_SPRITE_PALETTE={
 K:'#23201E',W:'#F8F4EB',Y:'#F6D669',G:'#A5D6B1',R:'#E7887F',B:'#8EC4EA',
 N:'#C6A07A',O:'#F0B365',P:'#E7C4E2',M:'#F2E2C8',T:'#D96C5F',C:'#F3E2B8',
 S:'#C9D8A9',U:'#C56A4B',D:'#E8B4A7'
};
const FOOD_SPRITES={
 onigiri:['....KKK....','...KWWWK...','..KWWWWWK..','.KWWWWWWWK.','.KWWWWWWWK.','.KWWKKWWWK.','.KWWKKWWWK.','..KNNNNNK..','..KKKKKKK..'],
 ramen:['..KKKKKKKK..','.KNNNNNNNNK.','.KNNNNNNNNK.','..KYYYYYYK..','...KKKKKK...','..KK..KK....','.KK....KK...'],
 bread:['...KKKKK...','..KMMMMMK..','.KMMMMMMMK.','.KMMMMMMMK.','.KMMMMMMMK.','.KMMMMMMMK.','..KNNNNNK..','...KKKKK...'],
 apple:['....KK.....','...KGK.....','..KRRRK....','.KRRRRRK...','.KRRRRRK...','.KRRRRRK...','..KRRRK....','...KKK.....'],
 salad:['...KKKKK...','..KGGSGGK..','.KGSSGGSGK.','.KGGGSSGGK.','..KNNNNNK..','...KKKKK...'],
 cake:['...KRRRK...','..KRRRRRK..','.KWWWWWWWK.','.KPPPPPPPK.','.KYYYYYYYK.','..KNNNNNK..','...KKKKK...'],
 milk:['...KKKK....','..KWWWK....','..KWWWK....','.KWWWWK....','.KWWBWK....','.KWWBWK....','.KWWWWK....','..KKKK.....'],
 fish:['....KK......','..KKBBKK....','.KBBBBBBKK..','KBBBBBBBBBK.','.KBBBBBBKK..','..KKBBKK....','....KK......'],
 chicken:['..KKKKK....','.KOOOOOKK..','.KOOOOOOOK.','.KOOOOOOOK.','..KOOOOKK..','...KKK.....'],
 donut:['...KKKKK...','..KOOOOOK..','.KOOYYOOOK.','.KOOYYOOOK.','..KOOOOOK..','...KKKKK...'],
 bento:['.KKKKKKKKK.','.KWWKKOOOK.','.KYYKKGGGK.','.KRRKKMMMK.','.KNNNNNNNK.','.KKKKKKKKK.'],
 cookie:['...KKKK....','..KCCCCK...','.KCCKCCCK..','.KCCCCCCK..','..KCCCCK...','...KKKK....']
};
function foodSpriteInfo(name){const rows=FOOD_SPRITES[name];return {width:Math.max(...rows.map(r=>r.length)),height:rows.length};}
function drawFoodSprite(ctx,name,px=4){
 const rows=FOOD_SPRITES[name];if(!rows)return;
 ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
 for(let y=0;y<rows.length;y++)for(let x=0;x<rows[y].length;x++){
  const c=FOOD_SPRITE_PALETTE[rows[y][x]];if(!c)continue;
  ctx.fillStyle=c;ctx.fillRect(x*px,y*px,px,px);
 }
}


// Seven deterministic body-outline variants per character. The original maps remain
// untouched for the normal appearance; non-body accessories and facial pixels stay fixed.
const BODY_AREAS={
 rabbit:{cheek:{rows:[24,35],cols:[1,32]},belly:{rows:[39,54],cols:[1,31]},fill:'D'},
 squirrel:{cheek:{rows:[29,37],cols:[1,23]},belly:{rows:[38,48],cols:[1,24]},fill:'J'},
 hedgehog:{cheek:{rows:[17,25],cols:[8,33]},belly:{rows:[26,43],cols:[8,28]},fill:'A'},
 otter:{cheek:{rows:[14,20],cols:[11,34]},belly:{rows:[23,32],cols:[12,35]},fill:'L'}
};
const PET_BODY_STAGES={thin3:-3,thin2:-2,thin1:-1,normal:0,chubby1:1,chubby2:2,chubby3:3};
const PIXEL_SPRITE_CACHE=new Map();
function cleanedSpriteRows(name){
 const rows=SPRITES[name]||[];
 const width=Math.max(...rows.map(r=>r.length));
 const grid=rows.map(r=>Array.from({length:width},(_,x)=>r[x]||'.'));
 if(name!=='squirrel')return grid;
 // Remove orphan noise pixels not connected to an illustrated object.
 const seen=new Set();
 for(let y=0;y<grid.length;y++)for(let x=0;x<width;x++){
  if(grid[y][x]==='.'||seen.has(y*width+x))continue;
  const comp=[],queue=[[x,y]];seen.add(y*width+x);
  while(queue.length){
   const [cx,cy]=queue.pop();comp.push([cx,cy]);
   for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++){
    let nx=cx+dx,ny=cy+dy,key=ny*width+nx;
    if(nx>=0&&nx<width&&ny>=0&&ny<grid.length&&grid[ny][nx]!=='.'&&!seen.has(key)){seen.add(key);queue.push([nx,ny])}
   }
  }
  if(comp.length<=2)for(const [cx,cy] of comp)grid[cy][cx]='.';
 }
 // Keep the user's original outline strokes intact; only tiny disconnected noise was filtered.
 return grid;
}
function bodyVariantPixels(name,stage){
 const k=name+':'+stage;if(PIXEL_SPRITE_CACHE.has(k))return PIXEL_SPRITE_CACHE.get(k);
 const source=cleanedSpriteRows(name),width=source[0].length,height=source.length,padding=7;
 const g=Array.from({length:height},(_,y)=>Array.from({length:width+2*padding},(_,x)=>source[y][x-padding]||'.'));
 const level=PET_BODY_STAGES[stage]||0,zone=BODY_AREAS[name];
 if(level!==0&&zone){
  for(const type of ['cheek','belly']){
   const part=zone[type], [ystart,yend]=part.rows,[xmin,xmax]=part.cols;
   for(let y=ystart;y<=yend&&y<height;y++){
    const mid=(ystart+yend)/2,range=Math.max(1,(yend-ystart)/2);
    const falloff=Math.sqrt(Math.max(0,1-Math.pow((y-mid)/range,2)));
    const amount=Math.round(level*(type==='cheek'?1.4:1.9)*falloff);
    if(amount===0)continue;
    // Only deform the body's row ends; do not resize the whole row, face or props.
    const hits=[];
    for(let x=xmin;x<=xmax&&x<width;x++)if(source[y][x]!=='.')hits.push(x);
    if(hits.length<12)continue;
    const left=hits[0],right=hits.at(-1);
    const fillLeft=(source[y][left+2]!=='.'&&source[y][left+2]!=='K'?source[y][left+2]:zone.fill);
    const fillRight=(source[y][right-2]!=='.'&&source[y][right-2]!=='K'?source[y][right-2]:zone.fill);
    if(amount>0){
     g[y][left+padding]=fillLeft;g[y][right+padding]=fillRight;
     for(let i=1;i<=amount;i++){
       g[y][left+padding-i]=i===amount?'K':fillLeft;
       g[y][right+padding+i]=i===amount?'K':fillRight;
     }
    }else{
     const reduce=-amount;
     for(let i=0;i<reduce;i++){
       g[y][left+padding+i]='.';g[y][right+padding-i]='.';
     }
     g[y][left+padding+reduce]='K';g[y][right+padding-reduce]='K';
    }
   }
  }
 }

 // Hedgehog's spikes are wider than its face; modifying only the outside silhouette
 // barely changes its apparent weight. Expand/shrink the cream cheeks and tummy too.
 if(name==='hedgehog'&&level!==0){
  for(let y=16;y<=41;y++){
   const cream=[];
   for(let x=7;x<width+7;x++)if(g[y][x]==='A')cream.push(x);
   if(cream.length<8)continue;
   const lo=cream[0],hi=cream.at(-1);
   const center= y<28?22:35;
   const radius=y<28?8:11;
   const falloff=Math.sqrt(Math.max(0,1-Math.pow((y-center)/radius,2)));
   const n=Math.round(Math.abs(level)*2.1*falloff);
   if(n===0)continue;
   const sides=[-1,1];
   for(const dir of sides){
    // Keep the purple star bag on the right of the lower body intact.
    if(dir===1&&y>=29)continue;
    const edge=dir===-1?lo:hi;
    const nextEdge=edge+dir*n;
    if(nextEdge<4||nextEdge>=g[y].length-4)continue;
    if(level>0){
     g[y][edge]='A';
     for(let i=1;i<=n;i++){
      const x=edge+dir*i;
      const current=g[y][x];
      if(current==='P'||current==='L')continue;
      g[y][x]=i===n?'K':'A';
     }
    }else{
     for(let i=0;i<n;i++)g[y][edge-dir*i]='M';
     const x=edge-dir*n;
     if(x>=0&&x<g[y].length)g[y][x]='K';
    }
   }
  }
 }
 const result={grid:g,width:g[0].length,height,filled:g.flat().filter(c=>c!=='.').length};
 PIXEL_SPRITE_CACHE.set(k,result);return result;
}
function renderBodySprite(ctx,name,stage,face,desiredWidth,desiredHeight){
 const variant=bodyVariantPixels(name,stage);
 const grid=variant.grid;const w=grid[0].length,h=grid.length;
 const mini=document.createElement('canvas');mini.width=w;mini.height=h;
 const sc=mini.getContext('2d');sc.imageSmoothingEnabled=false;
 for(let y=0;y<h;y++)for(let x=0;x<w;x++){
  const col=SPRITE_PALETTE[grid[y][x]];
  if(!col)continue;
  sc.fillStyle=col;sc.fillRect(x,y,1,1);
 }
 // A fixed-pixel reaction, separate from the referenced character data.
 if(face&&face!=='neutral'){
  const facial={rabbit:[23,32],squirrel:[19,31],hedgehog:[21,24],otter:[22,17]};
  const [bx,by]=facial[name],x=bx+7;
  if(face==='happy'||face==='smile'){
   sc.fillStyle=SPRITE_PALETTE.I;sc.fillRect(x-8,by+3,3,1);sc.fillRect(x+6,by+3,3,1);
  }else if(face==='surprised'){
   sc.fillStyle=SPRITE_PALETTE.K;sc.fillRect(x,by+4,2,3);
  }else if(face==='blink'||face==='wink'){
   sc.fillStyle=SPRITE_PALETTE.K;sc.fillRect(x-5,by,3,1);
  }
 }
 // Crop transparent padding and normalize the *overall visible size* of all five pets.
 let minX=w,minY=h,maxX=0,maxY=0;
 for(let y=0;y<h;y++)for(let x=0;x<w;x++)if(grid[y][x]!=='.'){
  minX=Math.min(minX,x);maxX=Math.max(maxX,x);minY=Math.min(minY,y);maxY=Math.max(maxY,y);
 }
 const cropW=Math.max(1,maxX-minX+1),cropH=Math.max(1,maxY-minY+1);
 const scale=Math.min((desiredWidth-18)/cropW,(desiredHeight-18)/cropH);
 const dw=Math.floor(cropW*scale),dh=Math.floor(cropH*scale);
 const dx=Math.round((desiredWidth-dw)/2),dy=Math.round((desiredHeight-dh)/2);
 ctx.clearRect(0,0,desiredWidth,desiredHeight);ctx.imageSmoothingEnabled=false;
 ctx.drawImage(mini,minX,minY,cropW,cropH,dx,dy,dw,dh);
}


/* Higher-resolution non-destructive sprite compositor.
   Do not warp the original pixel map or re-shape the accessories. */
function renderFinePetSprite(ctx,name,stage,face,desiredWidth,desiredHeight){
 const rows=cleanedSpriteRows(name),w=rows[0].length,h=rows.length;
 const d=2,pad=18,mini=document.createElement('canvas');
 mini.width=(w+pad*2)*d;mini.height=(h+10)*d;
 const g=mini.getContext('2d');g.imageSmoothingEnabled=false;
 const baseColor={rabbit:'D',squirrel:'J',hedgehog:'A',otter:'L'}[name];
 const fill=SPRITE_PALETTE[baseColor],outline=SPRITE_PALETTE.K,level=PET_BODY_STAGES[stage]||0;
 const at=(x,y,color)=>{g.fillStyle=color;g.fillRect(Math.round(x),Math.round(y),1,1)};
 const blob=(cx,cy,rx,ry,base)=>{
   for(let y=Math.floor(cy-ry)-1;y<=Math.ceil(cy+ry)+1;y++)
    for(let x=Math.floor(cx-rx)-1;x<=Math.ceil(cx+rx)+1;x++){
     const v=Math.pow((x-cx)/rx,2)+Math.pow((y-cy)/ry,2);
     if(v<=1.16)at(x,y,v<=.83?base:outline);
    }
 };
 const zone=BODY_AREAS[name];
 // Each fullness stage adds discrete cheek and tummy contours. The source silhouette
 // and its face, hat, balloon, star, spine and tail pixels are drawn unchanged on top.
 if(level>0){
  for(const [kind,mult] of [['cheek',1],['belly',1.3]]){
   const part=zone[kind], [y0,y1]=part.rows,[x0,x1]=part.cols;
   const y=Math.round((y0+y1)/2);
   const sampled=[];
   for(let yy=Math.max(y0,y-2);yy<=Math.min(y1,y+2,h-1);yy++)
    for(let x=x0;x<=Math.min(x1,w-1);x++)if(rows[yy][x]===baseColor)sampled.push(x);
   if(sampled.length<8)continue;
   const left=Math.min(...sampled),right=Math.max(...sampled);
   const outerX=Math.max(2,level*(kind==='cheek'?2.3:2.9));
   const outerY=Math.max(3,level*(kind==='cheek'?2:2.7));
   // Attach the new pixels to the body, without scaling the existing art.
   const cy=(y+5)*d;
   const sideLimit=name==='squirrel'&&kind==='belly'?1:2;
   blob((left+pad)*d-1,cy,outerX*d,outerY*d,fill);
   if(sideLimit===2)blob((right+pad)*d+1,cy,outerX*d,outerY*d,fill);
  }
 }
 // Exact original sprite matrix; no row displacement, no distorted outlines.
 // Scale2x: refine diagonal steps with one extra pixel without introducing colors.
 const codeAt=(x,y)=>rows[y]?.[x]||'.';
 for(let y=0;y<h;y++)for(let x=0;x<w;x++){
  const E=codeAt(x,y);if(E==='.')continue;
  const B=codeAt(x,y-1),D=codeAt(x-1,y),F=codeAt(x+1,y),H=codeAt(x,y+1);
  let cells=[E,E,E,E];
  if(D===B&&D!==H&&B!==F)cells[0]=D;
  if(B===F&&B!==D&&F!==H)cells[1]=F;
  if(D===H&&D!==B&&H!==F)cells[2]=D;
  if(H===F&&D!==H&&B!==F)cells[3]=F;
  for(let i=0;i<4;i++){
   const cc=SPRITE_PALETTE[cells[i]];if(!cc)continue;
   g.fillStyle=cc;g.fillRect((x+pad)*d+(i%2),(y+5)*d+Math.floor(i/2),1,1);
  }
 }
 // Smaller-body stages use localized inward waist marks, not erasure of body pixels.
 if(level<0){
  const zonePart=zone.belly,[y0,y1]=zonePart.rows,y=Math.round((y0+y1)*.5);
  const xs=[];
  for(let x=zonePart.cols[0];x<=Math.min(w-1,zonePart.cols[1]);x++)
   if(rows[y]?.[x]===baseColor)xs.push(x);
  if(xs.length>9){
   const left=Math.min(...xs),right=Math.max(...xs),n=Math.abs(level);
   // Soft colored waist highlights rather than stray black slash marks.
   const shading={rabbit:'L',squirrel:'B',hedgehog:'B',otter:'O'}[name];
   g.fillStyle=SPRITE_PALETTE[shading];
   for(let i=0;i<n;i++){
    const xx=(left+pad+2+i)*d,rx=(right+pad-2-i)*d,yy=(y+3+i)*d;
    g.fillRect(xx,yy,2,3);g.fillRect(rx,yy,2,3);
   }
  }
 }
 if(face&&face!=='neutral'){
  const p={rabbit:[22,32],squirrel:[17,31],hedgehog:[20,24],otter:[21,16]}[name];
  const x=(p[0]+pad)*d,y=(p[1]+5)*d;
  g.fillStyle=face==='surprised'?outline:SPRITE_PALETTE.I;
  if(face==='surprised')g.fillRect(x,y+5,3,3);
  else if(face==='happy'||face==='smile'){g.fillRect(x-16,y+8,5,2);g.fillRect(x+13,y+8,5,2)}
  else g.fillRect(x-9,y+3,5,1);
 }
 // All characters occupy the same drawing area, with no individual CSS scaling.

 // Fit the visible silhouette (not invisible padding) into a shared 188px stage.
 // Characters have equal visual scale while preserving each one's proportions.
 const pixels=g.getImageData(0,0,mini.width,mini.height).data;
 let loX=mini.width,loY=mini.height,hiX=-1,hiY=-1;
 for(let y=0;y<mini.height;y++)for(let x=0;x<mini.width;x++){
  if(pixels[(y*mini.width+x)*4+3]===0)continue;
  loX=Math.min(loX,x);hiX=Math.max(hiX,x);
  loY=Math.min(loY,y);hiY=Math.max(hiY,y);
 }
 if(hiX<loX)return;
 const cropW=hiX-loX+1,cropH=hiY-loY+1;
 const fit=Math.min((desiredWidth-18)/cropW,(desiredHeight-18)/cropH);
 const drawW=Math.max(1,Math.round(cropW*fit)),drawH=Math.max(1,Math.round(cropH*fit));
 ctx.clearRect(0,0,desiredWidth,desiredHeight);ctx.imageSmoothingEnabled=false;
 ctx.drawImage(mini,loX,loY,cropW,cropH,
  Math.round((desiredWidth-drawW)/2),Math.round((desiredHeight-drawH)/2),drawW,drawH);

}


/* 36×36 pixel recipes: more readable than the former 10px icons. */
function drawFineFoodSprite(ctx,name){
 const S=36,ink='#302c29';
 const col={rice:'#fff6e7',gold:'#f0cd73',brown:'#c99872',cream:'#f8e6c7',
  pink:'#e89ba0',red:'#d67d79',green:'#87b78d',leaf:'#6d9d79',
  blue:'#9cc8d8',dark:'#6a594e',nori:'#4c6255',bowl:'#caa6a5'};
 const grid=Array.from({length:S},()=>Array(S).fill(''));
 const pixel=(x,y,c)=>{x=Math.round(x);y=Math.round(y);if(x>=0&&x<S&&y>=0&&y<S)grid[y][x]=c};
 const block=(x,y,w,h,c)=>{for(let yy=y;yy<y+h;yy++)for(let xx=x;xx<x+w;xx++)pixel(xx,yy,c)};
 const shape=(predicate,fill,border=1)=>{
  const mask=Array.from({length:S},(_,y)=>Array.from({length:S},(_,x)=>predicate(x+.5,y+.5)));
  for(let y=0;y<S;y++)for(let x=0;x<S;x++)if(mask[y][x]){
   let outline=false;
   for(let dy=-border;dy<=border;dy++)for(let dx=-border;dx<=border;dx++)
    if(y+dy<0||x+dx<0||y+dy>=S||x+dx>=S||!mask[y+dy]?.[x+dx])outline=true;
   pixel(x,y,outline?ink:fill);
  }
 };
 const oval=(x,y,rx,ry,fill,border=1)=>shape((a,b)=>((a-x)/rx)**2+((b-y)/ry)**2<=1,fill,border);
 const poly=(pts,fill,border=1)=>shape((a,b)=>{
  let inIt=false;
  for(let i=0,j=pts.length-1;i<pts.length;j=i++){
   const [xi,yi]=pts[i],[xj,yj]=pts[j];
   if((yi>b)!==(yj>b)&&a<(xj-xi)*(b-yi)/(yj-yi)+xi)inIt=!inIt;
  }return inIt;
 },fill,border);
 const bowl=(fill=col.bowl)=>{poly([[4,18],[32,18],[29,29],[24,33],[11,33],[7,29]],fill);block(7,19,22,2,col.cream)};
 switch(name){
 case 'onigiri':
  poly([[17,4],[21,5],[32,22],[31,30],[26,33],[9,33],[4,29],[6,22],[14,7]],col.rice);
  block(12,24,12,8,col.nori);block(15,25,6,7,col.dark);break;
 case 'ramen':
  bowl();
  oval(18,18,14,6,col.gold);
  for(let i=0;i<5;i++){const x=8+i*5;block(x,15+(i%2),3,2,col.cream)}
  oval(24,16,5,4,col.rice);oval(24,16,2,2,col.gold,0);
  block(9,10,2,8,col.nori);block(15,9,2,8,col.nori);
  block(18,6,14,2,ink);break;
 case 'bread':
  poly([[6,13],[7,9],[11,7],[15,7],[18,9],[21,7],[26,7],[30,10],[30,31],[6,31]],col.brown);
  poly([[10,13],[13,11],[23,11],[26,14],[26,28],[10,28]],col.cream);break;
 case 'apple':
  oval(18,20,12,13,col.red);block(17,4,3,8,ink);
  poly([[18,9],[24,4],[30,6],[27,12]],col.green);oval(12,16,3,4,col.pink,0);break;
 case 'salad':
  oval(11,14,7,8,col.green);oval(20,11,7,7,col.leaf);oval(26,17,6,8,col.green);
  oval(18,19,4,4,col.red);bowl('#f4e9d7');break;
 case 'cake':
  block(7,11,22,20,col.pink);block(8,17,20,4,col.rice);block(8,27,20,3,col.brown);
  oval(18,12,11,5,col.rice);oval(18,7,4,4,col.red);block(18,2,2,4,ink);break;
 case 'milk':
  poly([[10,7],[14,4],[23,4],[26,8],[26,31],[10,31]],col.rice);
  block(12,16,13,10,col.blue);block(14,18,9,6,col.rice);break;
 case 'fish':
  poly([[4,18],[11,10],[24,10],[29,14],[34,7],[34,29],[29,23],[24,27],[11,26]],col.blue);
  oval(12,17,2,2,ink,0);block(21,13,2,11,col.dark);break;
 case 'chicken':
  oval(16,17,12,11,col.brown);poly([[21,18],[30,25],[28,31],[22,26]],col.cream);
  oval(29,29,4,4,col.rice);break;
 case 'donut':
  oval(18,18,14,14,col.brown);oval(18,18,6,6,col.rice); // the hole
  for(const [x,y] of [[9,12],[23,10],[12,27],[27,22]])block(x,y,3,1,col.pink);
  break;
 case 'bento':
  block(3,6,30,26,col.dark);block(5,8,26,22,col.cream);
  block(17,9,2,20,ink);block(6,19,24,2,ink);
  oval(12,14,5,4,col.rice);oval(25,14,5,4,col.brown);
  oval(12,25,5,4,col.green);oval(25,25,5,4,col.gold);break;
 case 'cookie':
  oval(18,18,13,13,col.brown);
  for(const [x,y] of [[12,12],[21,10],[24,23],[14,26],[18,18]])oval(x,y,2,2,col.dark,0);break;
 default:oval(18,18,12,12,col.gold);break;
 }
 ctx.canvas.width=S;ctx.canvas.height=S;ctx.clearRect(0,0,S,S);
 ctx.imageSmoothingEnabled=false;
 for(let y=0;y<S;y++)for(let x=0;x<S;x++)if(grid[y][x]){
  ctx.fillStyle=grid[y][x];ctx.fillRect(x,y,1,1);
 }
}



/* Stable preview renderer: user-authored matrix only.
   No automatic cheeks, outline rewriting, scale2x or synthesized pixels.
   Body variation must be a separately approved sprite asset before release. */
function renderStablePetSprite(ctx,name,desiredWidth,desiredHeight){
 const info=spriteInfo(name);
 const source=document.createElement('canvas');
 source.width=info.width;source.height=info.height;
 const sourceCtx=source.getContext('2d');
 sourceCtx.imageSmoothingEnabled=false;
 drawSprite(sourceCtx,name,1);
 // Same shared square stage, preserve the native sprite aspect ratio.
 const margin=12;
 const scale=Math.min((desiredWidth-margin*2)/info.width,(desiredHeight-margin*2)/info.height);
 const w=Math.max(1,Math.round(info.width*scale));
 const h=Math.max(1,Math.round(info.height*scale));
 ctx.clearRect(0,0,desiredWidth,desiredHeight);
 ctx.imageSmoothingEnabled=false;
 ctx.drawImage(source,0,0,info.width,info.height,
  Math.floor((desiredWidth-w)/2),Math.floor((desiredHeight-h)/2),w,h);
}


/*
 * Approved four-character sprite family:
 * Base geometry: original user-provided pixel map, never distorted.
 * Seven discrete, hand-placed cheek / belly accents per character.
 * All external accessories are part of the immutable base artwork.
 */
const CHARACTER_ACCENTS={
 rabbit: { cheeks:[[1,31],[32,31]],waist:[[1,44],[31,44]],skin:'D',light:'L' },
 squirrel:{ cheeks:[[1,32],[20,32]],waist:[[1,43],[23,43]],skin:'J',light:'B' },
 hedgehog:{ cheeks:[[11,24],[30,24]],waist:[[12,40],[29,40]],skin:'A',light:'B' },
 otter:{ cheeks:[[10,15],[35,15]],waist:[[12,27],[31,27]],skin:'L',light:'F' }
};
// These seven fixed masks were selected to show distinct stages without resizing any pixel row.
const BODY_STAGE_MARKS={
 thin3:{face:['..K..','..K..','..K..'],tummy:['.KKK.','..K..','..K..'],size:0},
 thin2:{face:['..K..','..K..'],tummy:['..KK.','..K..'],size:0},
 thin1:{face:['..K..'],tummy:['..K..'],size:0},
 normal:{face:[],tummy:[],size:0},
 chubby1:{face:['.SSS.','SSSSS','.SSS.'],tummy:['.SSS.','SSSSS','.SSS.'],size:1},
 chubby2:{face:['.SSSS.','SSSSSS','SSSSSS','.SSSS.'],tummy:['.SSSS.','SSSSSS','SSSSSS','.SSSS.'],size:2},
 chubby3:{face:['..SSSS..','.SSSSSS.','SSSSSSSS','SSSSSSSS','.SSSSSS.','..SSSS..'],tummy:['..SSSS..','.SSSSSS.','SSSSSSSS','SSSSSSSS','.SSSSSS.','..SSSS..'],size:3}
};
function renderApprovedPetStage(ctx,name,stage,width,height){
 const info=spriteInfo(name), source=document.createElement('canvas');
 source.width=info.width+24;source.height=info.height+12;
 const off=source.getContext('2d');
 off.imageSmoothingEnabled=false;
 const base=document.createElement('canvas');base.width=info.width;base.height=info.height;
 drawSprite(base.getContext('2d'),name,1);
 const accents=CHARACTER_ACCENTS[name];
 const selected=BODY_STAGE_MARKS[stage]||BODY_STAGE_MARKS.normal;
 if(accents&&stage!=='normal'){
  const apply=(pos,mask,color,outline=false)=>{
    const [cx,cy]=pos;
    for(let yy=0;yy<mask.length;yy++)for(let xx=0;xx<mask[yy].length;xx++){
      const code=mask[yy][xx];if(code==='.')continue;
      off.fillStyle=code==='K'?(outline?SPRITE_PALETTE.K:SPRITE_PALETTE[accents.light]):color;
      off.fillRect(12+cx+xx-Math.floor(mask[yy].length/2),6+cy+yy-Math.floor(mask.length/2),1,1);
    }
  };
  if(selected.size>0){
    // New cheeks and belly surfaces sit behind the original unchanged character art.
    for(const pos of accents.cheeks)apply(pos,selected.face,SPRITE_PALETTE[accents.skin]);
    for(const pos of accents.waist)apply(pos,selected.tummy,SPRITE_PALETTE[accents.skin]);
  }
 }
 // Original art remains untouched: expressions, eyes and accessories are always intact.
 off.drawImage(base,12,6);
 // A few fixed cheek/tummy highlight marks distinguish adjacent stages without stretching.
 if(accents&&selected.size>0){
   off.fillStyle=SPRITE_PALETTE[accents.light];
   for(const [cx,cy] of accents.cheeks){
     for(let n=0;n<selected.size;n++)off.fillRect(12+cx+(cx<20?2:-2),6+cy+2+n,2,1);
   }
 }
 if(accents&&stage.startsWith('thin')){
  // Slim stages are intentionally subtle: several crisp contour marks on the body,
  // not a geometric pinch that would damage the reference sprite.
  const n=Number(stage.at(-1));
  off.fillStyle=SPRITE_PALETTE[accents.light];
  for(const pos of accents.waist){
    for(let k=0;k<n;k++)off.fillRect(12+pos[0]+(pos[0]<20?1:-1)*k,6+pos[1]-k,1,2);
  }
 }
 // One shared 224px visual stage; preserve each sprite's natural aspect ratio.
 const drawW=width*0.88,drawH=height*0.88;
 const scale=Math.min(drawW/source.width,drawH/source.height);
 const w=Math.round(source.width*scale),h=Math.round(source.height*scale);
 ctx.clearRect(0,0,width,height);ctx.imageSmoothingEnabled=false;
 ctx.drawImage(source,0,0,source.width,source.height,
  Math.round((width-w)/2),Math.round((height-h)/2),w,h);
}
