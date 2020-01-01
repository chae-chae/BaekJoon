//
//  1546.cpp
//  BaekJoon
//
//  Created by 채채 on 02/01/2020.
//  Copyright © 2020 chaechae. All rights reserved.
//

#include <stdio.h>
int main(void){
    int tNum;
    double max;
    scanf("%d", &tNum);
    double score[tNum];
    double sum = 0;
    for (int i = 0; i<tNum; i++) {
        scanf("%lf", &score[i]);
    }
    max = score[0];
    for (int i = 0; i<tNum; i++) {
        if (score[i] > max) {
            max = score[i];
        }
    }
    for (int i = 0; i<tNum; i++) {
        score[i] = score[i]/max*100;
        sum += score[i];
    }
    double average;
    average = sum/(double)tNum;
    printf("%lf\n", average);
    return 0;
}
