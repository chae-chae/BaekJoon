//
//  11399.cpp
//  BaekJoon
//
//  Created by 채채 on 11/01/2020.
//  Copyright © 2020 chaechae. All rights reserved.
//

#include <stdio.h>
int main(void){
    int n;
    scanf("%d", &n);
    int time[n];
    for (int i = 0; i<n; i++) {
        scanf("%d", &time[i]);
    }
    int temp;
    for (int i = 0; i<n; i++) {
        for (int j = 0; j<n-1-i; j++) {
            if (time[j] > time[j+1]) {
                temp = time[j];
                time[j] = time[j+1];
                time[j+1] = temp;
            }
        }
    }
    int sum = 0;
    for (int i = 0; i<n; i++) {
        for (int j = 0; j<=i; j++) {
            sum += time[j];
        }
    }
    printf("%d\n", sum);
    return 0;
}
