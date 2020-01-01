//
//  2562.cpp
//  BaekJoon
//
//  Created by 채채 on 01/01/2020.
//  Copyright © 2020 chaechae. All rights reserved.
//

#include <stdio.h>
int main(void){
    int arr[9];
    int max;
    int index;
    for (int i = 0; i<9; i++) {
        scanf("%d", &arr[i]);
    }
    max = arr[0];
    index = 0;
    for (int i = 0; i<9; i++) {
        if (max < arr[i]) {
            max = arr[i];
            index = i;
        }
    }
    printf("%d\n%d\n", max, index+1);
    return 0;
}
