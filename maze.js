let R = 4;
let C = 4;
function countPaths(maze){
    for(let i = 0; i < R; i++){
        if (maze[i][0] == 0)
            maze[i][0] = 1;
        else
            break;
    }
	for(let i = 1; i < C; i++){
        if (maze[0][i] == 0)
            maze[0][i] = 1;
        else
            break;
    }
    for(let i = 1; i < R; i++){
        for(let j = 1; j < C; j++){
            if (maze[i][j] == -1)
                continue;
            if (maze[i - 1][j] > 0)
                maze[i][j] = (maze[i][j] +
                              maze[i - 1][j]);
               if (maze[i][j - 1] > 0)
                maze[i][j] = (maze[i][j] +
                              maze[i][j - 1]);
	}}
    return (maze[R - 1][C - 1] > 0) ?
            maze[R - 1][C - 1] : 0;
}
console.log(countPaths([ [ 0, 0, 0, 0 ],
	[ 0, -1, 0, 0 ],
	[ -1, 0, 0, 0 ],
	[ 0, 0, 0, 0 ] ]))