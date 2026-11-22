// Faithful, deterministic palette sprites based on user-supplied pixel maps.
// Row lengths intentionally vary; out-of-range cells are transparent.
const SPRITE_PALETTE = {
  K:'#23201E',A:'#FCEDD4',B:'#F9CFC4',C:'#FBDA67',D:'#DDAFFF',
  E:'#93FACD',F:'#ABBAE6',G:'#68D2A8',H:'#6CC6F5',I:'#F2ABC3',
  J:'#FCA8A0',L:'#8B95DF',M:'#4099B5',N:'#CC86AC',O:'#6C8BD0',
  P:'#8867B6',Q:'#2F5499'
};
const SPRITES = {
 hamster:[
"..............KKKKKK..........KKKKK.....",
"....KKK......KKKKKKKKK.......KKKKKKK....",
"...KKJKK.KK..KKEEEEEKK......KKEEEEEKF...",
"...KJJJKKKKKKKKGGGEEKKKKKKKKKKEEEGGGKK..",
"..KKJJJJKJJKKKKGGGGEKKKKKKKKKKEGGGGGKK..",
".KKKJJJJJJK..KKGGGGEEEEEEEEEEEEEGGGGKK..",
"KKJJJJJJJKK...KKGGGEEEEEEEEEEEEEGGGKK...",
"KKKNJJJJJJK....KKGEEEEEEEEEEEEEEGGKK....",
".KKNJJJJJJNK...KKEEEEEEEEEEEEEEEEKK.....",
"..KKJJKKKNNKK.FKEEEEEEEEEEEEEEEEEEEK....",
"..KKNNKKKKKK..KKEEEEEEEEEEEEEEEEEEEK....",
"..KKNKKKKKK..KKGGEEEKEEEEEEEEKKEEGGGKK..",
"....KKKKK...KKKGGEEKKKEEEEEEKKKEEGGGKK..",
".......KK...KKGEEEEKKKEEEEEEKKKEEEEEGKK.",
"........KKKKGGEEEEEEEEEEEEEEEEEEEEEEEGGK",
"........KKKKGGEEEEEEEEEEKEEEEEEEEEEEEGGK",
"........KKAKGEEEEEEEEEEKEKEEEEEEEEEEEEEK",
"........KKKKGEEEEEEEEEEKEEEEEEEEEEEEEEEK",
".........KKKGEEEEEEEEEEEEEEEEEEEEEEEEEEK",
".........KKKGEEEEEEEEGEEEEEEGGEEEEEEEGGK",
".........KKGKKGEEEEGGGEEEEEEGGGEEEEEGKK.",
".........KKGEKKGGGGKEEEEEEEEEEKGGGGGKK..",
"..........KGGGKGGGGKEEEEEEEEEEKGGGGGKK..",
"...........KGGGEEEEEEEEEEEEEEEEEEEEKK...",
"............KKKGGGEEEEEEEEEEEEEEGGEEKK..",
".............KKKKEEEEEEEEEEEEEEEKKGGKK..",
".............KKKKEEEEEEEEEEEEEEEKKGGKK..",
".............KKEEEGEEEEEEEEEEEEGEEEKK...",
".............KKEEEEGEEEEEEEEEEGEEEEKK...",
".............KKGEEEGEEEEEEEEEEGEEEGKK...",
".............KKGGGGEGGGGGGGGGGEGGGGKK...",
"..............KKGGGGGKKKKKKKGGGGGGKK....",
"...............KGGGGGKKKKKKKKGGGGKK.....",
"................KKKKK.......KKKKKK......"
 ],
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
 hamster:{cheek:{rows:[12,20],cols:[13,39]},belly:{rows:[21,31],cols:[13,39]},fill:'E'},
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
 // One-pixel external black contour, retaining the face and the tail's spiral lines.
 const before=grid.map(r=>r.slice());
 const outside=Array.from({length:grid.length},()=>Array(width).fill(false));
 const work=[];
 for(let x=0;x<width;x++){work.push([x,0],[x,grid.length-1])}
 for(let y=0;y<grid.length;y++){work.push([0,y],[width-1,y])}
 while(work.length){
  const [x,y]=work.pop();
  if(x<0||y<0||y>=grid.length||x>=width||outside[y][x]||before[y][x]!=='.')continue;
  outside[y][x]=true;
  work.push([x+1,y],[x-1,y],[x,y+1],[x,y-1]);
 }
 const isOuter=(x,y)=>{
  for(const [dx,dy] of [[1,0],[-1,0],[0,1],[0,-1]]){
   let xx=x+dx,yy=y+dy;
   if(xx<0||yy<0||yy>=grid.length||xx>=width)return true;
   if(outside[yy][xx])return true;
  }
  return false;
 };
 const original=grid.map(r=>r.slice());
 for(let y=0;y<grid.length;y++)for(let x=0;x<width;x++){
  if(original[y][x]==='.')continue;
  if(isOuter(x,y)){grid[y][x]='K';continue}
  if(original[y][x]!=='K')continue;
  // Soften only redundant second outline cells near the outer contour.
  let neighborOuter=false,nearFill=[];
  for(const [dx,dy] of [[1,0],[-1,0],[0,1],[0,-1]]){
    const xx=x+dx,yy=y+dy;
    if(xx<0||xx>=width||yy<0||yy>=grid.length)continue;
    if(isOuter(xx,yy)&&original[yy][xx]==='K')neighborOuter=true;
    if(original[yy][xx]!=='.'&&original[yy][xx]!=='K')nearFill.push(original[yy][xx]);
  }
  if(neighborOuter&&nearFill.length>=2)grid[y][x]=nearFill[0];
 }
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
  const facial={hamster:[25,17],rabbit:[23,32],squirrel:[19,31],hedgehog:[21,24],otter:[22,17]};
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
