//
//  4673.cpp
//  BaekJoon
//
//  Created by 채채 on 03/01/2020.
//  Copyright © 2020 chaechae. All rights reserved.
//

#include <stdio.h>
void selfNumber(int testcase[]);
int main(void){
    int testcase[10035];
    for (int i = 0; i<10000; i++) {
        testcase[i] = i+1;
    }
    selfNumber(testcase);
    for (int i = 0; i<10000; i++) {
        if (testcase[i] != -1) {
            printf("%d\n", testcase[i]);
        }
    }
    return 0;
}
void selfNumber(int testcase[]){
    int num;
    for (int i = 1; i<=10000; i++) {
        if (i<10) {
            num = i+i;
            testcase[num-1] = -1;
        } else if (i<100) {
            num = i+i/10+i%10;
            testcase[num-1] = -1;
        } else if (i<1000) {
            num = i+i/100+((i%100)/10)+((i%100)%10);
            testcase[num-1] = -1;
        } else {
            num = i+i/1000+((i%1000)/100)+(((i%1000)%100)/10)+(((i%1000)%100)%10);
            testcase[num-1] = -1;
        }
    }
}
