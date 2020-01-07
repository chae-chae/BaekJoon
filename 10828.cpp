//
//  10828.cpp
//  BaekJoon
//
//  Created by 채채 on 07/01/2020.
//  Copyright © 2020 chaechae. All rights reserved.
//

#include <iostream>
using namespace std;
#include <cstring>

typedef struct _Stack Stack;
struct _Stack {
    int stk[10000];
    int top;
    int size;
};
void push(Stack * sp, int pn);
void pop(Stack * sp);
void size(Stack * sp);
void empty(Stack * sp);
void top(Stack * sp);
void myFlush(void);
int main(void){
    Stack stack = {{0, }, 0, 0};
    int n;
    char command[6];
    scanf("%d", &n);
    for (int i = 0; i<n; i++) {
        scanf("%s", command);
//        printf("%s\n", command);
        if (!strcmp(command, "pop")){
            pop(&stack);
        } else if (!strcmp(command, "size")){
            size(&stack);
        } else if (!strcmp(command, "empty")){
            empty(&stack);
        } else if (!strcmp(command, "top")) {
            top(&stack);
        } else if (!strcmp(command, "push")) {
            int pn;
            scanf("%d", &pn);
//            printf("pn %d\n", pn);
            myFlush();
            push(&stack, pn);
        }
    }
    return 0;
}
void push(Stack * sp, int pn){
//    printf("push\n");
    sp->stk[sp->top] = pn;
    (sp->top)++;
    (sp->size)++;
}
void pop(Stack * sp){
//    printf("pop\n");
    if (sp->size == 0) {
        printf("-1\n");
    } else {
        printf("%d\n", sp->stk[(sp->top)-1]);
        sp->stk[sp->top] = 0;
        sp->top--;
        sp->size--;
    }
}
void size(Stack * sp){
//    printf("size\n");
    printf("%d\n", sp->size);
}
void empty(Stack * sp){
//    printf("empty\n");
    if (sp->size == 0) {
        printf("1\n");
    } else {
        printf("0\n");
    }
}
void top(Stack * sp){
//    printf("top\n");
    if (sp->size == 0) {
        printf("-1\n");
    } else {
        printf("%d\n", sp->stk[(sp->top)-1]);
    }
}
void myFlush(void){
    while (getchar() != '\n') {
        ;
    }
}
