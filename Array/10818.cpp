//
//  10818.cpp
//  BaekJoon
//
//  Created by 채채 on 31/12/2019.
//  Copyright © 2019 chaechae. All rights reserved.
//

#include <stdio.h>
int main(void){
    int inputNum;
    scanf("%d", &inputNum);
    int arr[inputNum];
    int min, max;
    for (int i = 0; i<inputNum; i++) {
        scanf("%d", &arr[i]);
    }
    max = arr[0];
    min = arr[0];
    for (int i = 0; i<inputNum; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    printf("%d %d", min, max);
    return 0;
}
