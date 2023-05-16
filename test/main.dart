int factorial(int n) {
  if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

void main() {
  int num = 10;
  int result = factorial(num);
  print('The factorial of $num is: $result');
}