// 原始 list 如下
let list =[
  {id:1,name:'部门A',parentId:0},
  {id:2,name:'部门B',parentId:0},
  {id:3,name:'部门C',parentId:1},
  {id:4,name:'部门D',parentId:1},
  {id:5,name:'部门E',parentId:2},
  {id:6,name:'部门F',parentId:3},
  {id:7,name:'部门G',parentId:2},
  {id:8,name:'部门H',parentId:4}
];
// var result = convert(list);

// 转换后的结果如下
let result = [
  {
    id: 1,
    name: '部门A',
    parentId: 0,
    children: [
      {
        id: 3,
        name: '部门C',
        parentId: 1,
        children: [
          {
            id: 6,
            name: '部门F',
            parentId: 3
          }, {
            id: 16,
            name: '部门L',
            parentId: 3
          }
        ]
      },
      {
        id: 4,
        name: '部门D',
        parentId: 1,
        children: [
          {
            id: 8,
            name: '部门H',
            parentId: 4
          }
        ]
      }
    ]
  },
];

// const convert = (list) => {
//   const idMap = {};
//   const nameMap = {};
//   list.forEach((item) => {
//     const { id, name, parentId } = item;
//     if (idMap[parentId]) {
//       idMap[parentId].push(id);
//     } else {
//       idMap[parentId] = [id];
//     }
//     nameMap[id] = name;
//   });
//   const create = (id) => {
//     let ans = [];
//     if (idMap[id]) {
//       ans = idMap[id].map(childId => {
//         return {
//           id: childId,
//           name: nameMap[childId],
//           parentId: id,
//           children: create(childId),
//         };
//       });
//     }
//     return ans;
//   }
  
//   return create(0);
// }

function convert(list) {
  let map = {}; // 使用一个哈希表来存储每个节点的引用

  // 创建一个空的根节点
  let rootNode = {
    id: 0,
    name: '根节点',
    parentId: null,
    children: []
  };

  // 将所有节点按照 id 存储到哈希表中
  list.forEach(node => {
    map[node.id] = {
      id: node.id,
      name: node.name,
      parentId: node.parentId,
      children: []
    };
  });

  // 遍历原始 list，根据 parentId 将子节点添加到父节点的 children 数组中
  list.forEach(node => {
    const parentNode = map[node.parentId];
    if (parentNode) {
      parentNode.children.push(map[node.id]);
    } else {
      rootNode.children.push(map[node.id]); // 如果没有父节点，则为根节点的子节点
    }
  });

  return rootNode.children;
}


console.log('first', JSON.stringify(convert(list), null, 2));