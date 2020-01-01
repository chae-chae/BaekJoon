//
//  4344.cpp
//  BaekJoon
//
//  Created by 채채 on 02/01/2020.
//  Copyright © 2020 chaechae. All rights reserved.
//

#include <stdio.h>
int main(void){
    int tNum;
    int stdNum;
    scanf("%d", &tNum);
    double aver[tNum];
    double winners[tNum];
    for (int i = 0; i<tNum; i++) {
        winners[i] = 0;
    }
    for (int i = 0; i<tNum; i++) {
        double sum = 0;
        int cnt = 0;
        scanf("%d", &stdNum);
        double students[stdNum];
        for (int j = 0; j<stdNum; j++) {
            scanf("%lf", &students[j]);
            sum += students[j];
        }
        aver[i] = sum/(double)stdNum;
        for (int l = 0; l<stdNum; l++) {
            if (students[l] > aver[i]) {
                cnt++;
            }
        }
        winners[i] = (double)cnt/stdNum*100;
    }
    for (int i = 0; i<tNum; i++) {
        printf("%.3lf%%\n", winners[i]);
    }
    return 0;
}
