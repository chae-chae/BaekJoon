//
//  2750.cpp
//  BaekJoon
//
//  Created by 채채 on 05/01/2020.
//  Copyright © 2020 chaechae. All rights reserved.
//

#include <stdio.h>
int main(void){
    int n;
    scanf("%d", &n);
    int arr[n];
    for (int i = 0; i<n; i++) {
        scanf("%d", &arr[i]);
    }
    int temp;
    for (int i = 0; i<n; i++) {
        for (int j = 0; j<n-1; j++) {
            if (arr[j] > arr[j+1]) {
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    for (int i = 0; i<n; i++) {
        printf("%d\n", arr[i]);
    }
    return 0;
}
