const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  rootNode;

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    if (!this.rootNode) {
      this.rootNode = new Node(data);
    } else {
      let isFound = false;
      let currentNodeLink = this.rootNode;

      while (!isFound) {
        if (data > currentNodeLink.data && currentNodeLink.right === null) {
          isFound = true;
          currentNodeLink.right = new Node(data);
        } else if (data > currentNodeLink.data) {
          currentNodeLink = currentNodeLink.right;
        } else if (
          data < currentNodeLink.data &&
          currentNodeLink.left === null
        ) {
          isFound = true;
          currentNodeLink.left = new Node(data);
        } else if (data < currentNodeLink.data) {
          currentNodeLink = currentNodeLink.left;
        } else if (data === currentNodeLink.data) {
          isFound = true;
          //skip
        }
      }
    }
  }

  has(data) {
    if (!this.rootNode) {
      return false;
    } else {
      let isFound = false;
      let currentNodeLink = this.rootNode;
      let result = false;

      while (!isFound) {
        if (data > currentNodeLink.data && currentNodeLink.right === null) {
          isFound = true;
          result = false;
        } else if (data > currentNodeLink.data) {
          currentNodeLink = currentNodeLink.right;
        } else if (
          data < currentNodeLink.data &&
          currentNodeLink.left === null
        ) {
          isFound = true;
          result = false;
        } else if (data < currentNodeLink.data) {
          currentNodeLink = currentNodeLink.left;
        } else if (data === currentNodeLink.data) {
          isFound = true;
          result = true;
        }
      }

      return result;
    }
  }

  find(data) {
    if (!this.rootNode) {
      return false;
    } else {
      let isFound = false;
      let currentNodeLink = this.rootNode;
      let result = null;

      while (!isFound) {
        if (data > currentNodeLink.data && currentNodeLink.right === null) {
          isFound = true;
        } else if (data > currentNodeLink.data) {
          currentNodeLink = currentNodeLink.right;
        } else if (
          data < currentNodeLink.data &&
          currentNodeLink.left === null
        ) {
          isFound = true;
        } else if (data < currentNodeLink.data) {
          currentNodeLink = currentNodeLink.left;
        } else if (data === currentNodeLink.data) {
          isFound = true;
          result = currentNodeLink;
        }
      }

      return result;
    }
  }

  remove(data) {
    if (!this.rootNode) {
      return;
    } else {
      let isFound = false;
      let currentNodeLink = this.rootNode;
      let previousNodeLink = null;

      while (!isFound) {
        if (data > currentNodeLink.data && currentNodeLink.right === null) {
          isFound = true;
        } else if (data > currentNodeLink.data) {
          previousNodeLink = currentNodeLink;
          currentNodeLink = currentNodeLink.right;
        } else if (
          data < currentNodeLink.data &&
          currentNodeLink.left === null
        ) {
          isFound = true;
        } else if (data < currentNodeLink.data) {
          previousNodeLink = currentNodeLink;
          currentNodeLink = currentNodeLink.left;
        } else if (data === currentNodeLink.data) {
          isFound = true;

          if (currentNodeLink.left === null && currentNodeLink.right === null) {
            if (!!previousNodeLink) {
              if (previousNodeLink.data > currentNodeLink.data) {
                previousNodeLink.left = null;
              } else {
                previousNodeLink.right = null;
              }
            }
            currentNodeLink = null;
          } else if (currentNodeLink.left === null) {
            currentNodeLink.data = currentNodeLink.right.data;
            currentNodeLink.left = currentNodeLink.right.left;
            currentNodeLink.right = currentNodeLink.right.right;
          } else if (currentNodeLink.right === null) {
            currentNodeLink.data = currentNodeLink.left.data;
            currentNodeLink.right = currentNodeLink.left.right;
            currentNodeLink.left = currentNodeLink.left.left;
          } else {
            if (!!previousNodeLink) {
              if (previousNodeLink.data > currentNodeLink.data) {
                previousNodeLink.left = null;
              } else {
                previousNodeLink.right = null;
              }
            } else {
              this.rootNode = null;
            }
            let addStack = [];

            addStack.push(currentNodeLink.left);
            addStack.push(currentNodeLink.right);
            while (addStack.length > 0) {
              const node = addStack.pop();
              this.add(node.data);
              if (node.left) {
                addStack.push(node.left);
              }

              if (node.right) {
                addStack.push(node.right);
              }
            }
          }
        }
      }

      // return result;
    }
  }

  min() {
    if (!this.rootNode) {
      return null;
    } else {
      let isFound = false;
      let currentNodeLink = this.rootNode;
      let result = null;

      while (!isFound) {
        if (currentNodeLink.left !== null) {
          currentNodeLink = currentNodeLink.left;
        } else {
          isFound = true;
          result = currentNodeLink.data;
        }
      }

      return result;
    }
  }

  max() {
    if (!this.rootNode) {
      return null;
    } else {
      let isFound = false;
      let currentNodeLink = this.rootNode;
      let result = null;

      while (!isFound) {
        if (currentNodeLink.right !== null) {
          currentNodeLink = currentNodeLink.right;
        } else {
          isFound = true;
          result = currentNodeLink.data;
        }
      }

      return result;
    }
  }
}

module.exports = {
  BinarySearchTree,
};
