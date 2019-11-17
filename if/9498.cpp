//
//  9498.cpp
//  BaekJoon
//
//  Created by 채채 on 17/11/2019.
//  Copyright © 2019 chaechae. All rights reserved.
//

#include <stdio.h>
int main(void){
    int score;
    scanf("%d", &score);
    if (score >= 90) {
        printf("A");
    } else if (score >= 80) {
        printf("B");
    } else if (score >= 70) {
        printf("C");
    } else if (score >= 60) {
        printf("D");
    } else {
        printf("F");
    }
    return 0;
}
