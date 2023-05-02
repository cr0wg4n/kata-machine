const steps = [
  [1,0],
  [-1,0],
  [0, 1],
  [0,-1],
]

function walk(maze: string[], wall: string, current: Point, end: Point, visited: boolean[][], path: Point[]): boolean {
  // wall
  if(maze[current.y][current.x] === wall){
    return false
  }

  // out of the maze
  if(current.x < 0 || current.x > maze[0].length ||
    current.y < 0 || current.y > maze.length 
    ) {
    return false
  }

  // was visited
  if(visited[current.y][current.x]) {
    return false
  }

  // the end
  if(current.x === end.x && end.y === current.y) {
    path.push(end)
    return true
  }

  visited[current.y][current.x] = true
  path.push(current)

  for (const [x,y] of steps) {
    if(walk(maze, wall, {
      x: current.x + x,
      y: current.y + y
    }, end, visited, path)) {
      return true
    }
  }
  path.pop()
  return false
}

export default function solve(
  maze: string[], 
  wall: string, 
  start: Point, 
  end: Point): Point[] {
  const visited: boolean[][] = []
  const path: Point[] = []
  
  for (const i of maze) {
    visited.push(new Array(i.length).fill(false))
  }

  walk(maze, wall, start, end, visited, path)

  return path
}