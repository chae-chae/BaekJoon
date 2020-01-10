//
//  2309.cpp
//  BaekJoon
//
//  Created by 채채 on 11/01/2020.
//  Copyright © 2020 chaechae. All rights reserved.
//

#include <stdio.h>
void makeHun(int sum, int dwarves[]);
int main(void){
    int dwarves[9];
    int sum = 0;
    for (int i = 0; i<9; i++) {
        scanf("%d", &dwarves[i]);
    }
    for (int i = 0; i<9; i++) {
        sum += dwarves[i]; // 아홉명 총합이 나올거고
    }
    makeHun(sum, dwarves);
//    int huncheck = 0;
//    for (int i = 0; i<9; i++) {
//        huncheck += dwarves[i]; // 아홉명 총합이 나올거고
//    }
//    printf("%d\n", huncheck);
    int temp;
    for (int i = 0; i<9; i++) {
        for (int j = 0; j<8-i; j++) {
            if (dwarves[j] > dwarves[j+1]) {
                temp = dwarves[j];
                dwarves[j] = dwarves[j+1];
                dwarves[j+1] = temp;
            }
        }
    }
    for (int i = 2; i<9; i++) {
        printf("%d\n", dwarves[i]);
    }
    return 0;
}
void makeHun(int sum, int dwarves[]){
    int i = 0, j = 0;
    for (i = 0; i<9; i++) {
        for (j = i+1; j<9; j++) {
            if (sum - (dwarves[i] + dwarves[j]) == 100) {
                dwarves[i] = 0;
                dwarves[j] = 0;
                return;
            }
        }
    }
}
