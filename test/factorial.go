package main

import "fmt"

func factorial(n uint64) uint64 {
	if n == 0 {
		return 1
	}
	return n * factorial(n-1)
}

func main() {
	num := uint64(10)
	result := factorial(num)
	fmt.Printf("Factorial of %d is %d\n", num, result)
}
