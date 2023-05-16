def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)

def main():
    num = 10
    result = factorial(num)
    print(f"The factorial of {num} is: {result}")

if __name__ == "__main__":
    main()
