#include <stdio.h>
int main(){
    int n;
	int cute = 0;
    int notCute = 0;
	
	scanf("%d",&n);
	
    int temp;
	for(int i=0; i<n; i++){
		scanf("%d",&temp);
        if(temp){
            cute++;
        } else {
            notCute++;
        }
	}

	if(cute > notCute){
		printf("Junhee is cute!");
	} else {
		printf("Junhee is not cute!");
	}
	
	return 0;
}
